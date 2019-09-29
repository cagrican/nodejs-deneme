import mongoose from "mongoose";
import swagger from "./config/swagger";
import {config} from "dotenv";
import express_swagger_generator from "express-swagger-generator";
import app from "./app";

config({
    path: __dirname + "/variables.env"
});

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

mongoose.connection.on("error", err => {
    console.error(`-> ${err.message}`);
});

app.set("port", process.env.PORT || 7777);

//Swagger conf
express_swagger_generator(app)(swagger);

const server = app.listen(app.get("port"), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});