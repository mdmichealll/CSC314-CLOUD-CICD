const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'statweb')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'statweb/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'statweb/about.html'));
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});