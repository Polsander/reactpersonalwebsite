const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.get('/', (req,res) => {
    res.send('hi');
})

app.get('/fighters', (req, res) => {


    res.json([
        { firstName: "Connor", lastName: "McGregor" },
        { firstName: "Dustin", lastName: "Porier" }
    ]);
})




app.listen(3001, () => {
    console.log('Listening on port 3001');
    console.log('This is express!');
});

