const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, "../public/index.html"));

})

app.use(express.static("public"));

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server breathing on ${port}`)
})