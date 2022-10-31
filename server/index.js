//require statements for installs
require("dotenv").config();
const massive = require('massive');
const express = require('express');
const path = require('path');

//require controllers
const productsCtrl = require('./controllers/productsCtrl');

//middleware
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// })

//aws
const aws = require('aws-sdk');

aws.config.getCredentials(function(err) {
    if (err) console.log("here is the error: ", err.stack);
    else {
        console.log("Access key:", aws.config.credentials.accessKeyId)
    }
})


const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

app.get('/api/signs3', (req, res) => {
    aws.config = {
        region: 'us-west-1',
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
    
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read',
    };
    
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
        };
        
        return res.send(returnData);
    });
});

//products endpoints
app.get('/api/shop-products', productsCtrl.getAllProducts);
app.get('/api/shop-products/:product_id', productsCtrl.getIndividualProduct);
app.get('/api/shop-products/filter-collection/:product_collection', productsCtrl.getProductsByCollection);

//production
app.use(express.static(`${__dirname}/../build`));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

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