//require statements for installs
require("dotenv").config();
const massive = require('massive');
const express = require('express');

//require controllers
const productsCtrl = require('./controllers/productsCtrl');

//middleware
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

//products endpoints
app.get('/api/products', productsCtrl.getAllProducts);


//massive
massive ({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`DB up and server running on ${SERVER_PORT}`))
})
.catch(err => console.log(err));