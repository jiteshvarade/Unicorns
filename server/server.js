const {PORT} = require("./constants.js");
const express = require('express');
const cors = require('cors');

if(require.main === module){
    const app = express();
    app.use(express.json());
    app.use(cors({
        origin : true
    }));

    app.listen(PORT, () => {
        console.log("server started successfully");
        console.log(`localhost:${PORT}`);
    });

    app.get("/", (req,res) => {
        res.send("Welcome to unicorn server");
    });
}