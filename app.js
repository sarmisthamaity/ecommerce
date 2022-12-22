const express = require('express');
const app = express();
require('./db/connection');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const router = require('./routes/index');

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log('server is up')
});
