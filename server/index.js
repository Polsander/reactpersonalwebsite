//imports
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Routes we can use

app.get('/',(req,res)=>{
    res.json("name: Fernando")
});

app.listen(PORT,() => {
console.log(`Server is listening on ${PORT}`)
});
