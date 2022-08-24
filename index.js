//imports
const express = require('express');

const PORT = process.env.PORT || 3001;

const path = require("path");
const app = express();

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

// // Routes we can use

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
//   });

app.listen(PORT,() => {
console.log(`Server is listening on ${PORT}`)
});
