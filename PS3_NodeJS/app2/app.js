const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI;

const dbName = 'placesDB';

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

async function connectToDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db(dbName);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/process', async (req, res) => {
    const db = await connectToDB();
    const collection = db.collection('places');

    const placeOrZip = req.body.placeOrZip.trim();

    const isZipCode = !isNaN(parseInt(placeOrZip.charAt(0)));

    let query = {};
    if (isZipCode) {
        query = { zips: placeOrZip };
    } else {
        query = { place: placeOrZip };
    }

    const result = await collection.findOne(query);

    if (result) {
        res.render('process', { place: result.place, zips: result.zips });
    } else {
        res.send('No data found for the entered place or zip code.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});