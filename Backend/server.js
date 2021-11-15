
import express from "express";
import mongoose from "mongoose";
import Cards from "./DBSchema.js";
import Cors from "cors";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb+srv://Samer:IyyQR9SX1f9OSSUA@cluster0.rgmdu.mongodb.net/MillenniomDB?retryWrites=true&w=majority'

//Middleware
app.use(express.json());
app.use(Cors());

//DB config 
mongoose.connect(connectionUrl, {
    //to make sure a smooth connection using mongoose
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello potato"));

//pushing data to db
app.post('/millenniom/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err)
            res.status(500).send(err);
        else 
            res.status(201).send(data);
    })
});

//getting data from db
app.get('/millenniom/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err)
            res.status(500).send(err);
        else 
            res.status(200).send(data);
    })
});

//Listener
app.listen(port, () =>console.log("listening on port: " + port));