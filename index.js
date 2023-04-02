const MongoClient = require('mongodb').MongoClient;
const URL = `mongodb+srv://programmermdhasan:gpMu1NkYdA1URhrW@cluster0.rym6npt.mongodb.net?retryWrites=true&w=majority`;
const config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, (err) => {
    if (err) {
        console.log(`Connection Failed`);
    } else {
        console.log(`successfully connected`);
    }
})