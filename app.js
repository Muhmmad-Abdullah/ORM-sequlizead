const express = require('express');
const app = express();
const port = 7000;
// const db = require('./models');
const userCtrl = require('./controller/controller');
app.get('/', (req, res) => {
    res.send("This is the home page");
});
app.get('/add', userCtrl.addUser);
app.get('/crud', userCtrl.crudOperation);
// // app.get('/add', async (req, res) => {
// //     try {
// //         await userCtrl.addUser(req, res);
// //     } catch (error) {
// //         console.error("Error:", error);
// //         res.status(500).send("An error occurred.");
// //     }
// // });
app.listen(port, () => {
    console.log(`Your app is listening at http://localhost:${port}`);
});

