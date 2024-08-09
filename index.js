const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Hello from Server"
    })
})

app.listen(4000, () => {
    console.log(`SERVER RUNNING ON PORT 4000`);
})