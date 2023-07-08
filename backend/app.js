const express = require("express");
const cors = require("cors");
const app = express();
var path = require('path');
const signingRoutes = require("./routes/signing.routes");
const proposalRoutes = require('./routes/proposal.route')
const userRoutes = require('./routes/user.route')
// let multer = require('./middlewares/multer');
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer();
app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))
app.use('/',signingRoutes);
app.use('/',proposalRoutes);
app.use('/', userRoutes)
module.exports = app;