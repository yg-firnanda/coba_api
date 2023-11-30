const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Hello WKWKWK");
})

app.get('/about', (req, res) => {
    res.send("Tentang saya");
})

app.listen(3000, () => {
    console.log("Successful!");
})