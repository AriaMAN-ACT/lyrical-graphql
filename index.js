const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
    path: path.join(__dirname, '/config.env')
});

const app = require('./server');

const DB =
    process.env.DATABASE
        .replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log('Connected to DB successfully.');
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App is running in port${port}`);
});