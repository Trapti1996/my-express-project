const express = require('express');
const morgan=require('morgan');
const bodyParser      = require('body-parser');
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(bodyParser.json());
//endpoint=>array_sum
app.post('/array_sum',(req,res) =>{

    let {numbers} = req.body;
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);

     res.send({ sum });

});
app.listen(port, (req, res) => {
    console.log("=====server started===on port===", port);
});