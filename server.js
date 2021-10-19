require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./db/connect");

const port = process.env.PORT || 3000;

app.set("trust proxy", 1);

app.use(cors());

//app.use(express.static("public"));
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
