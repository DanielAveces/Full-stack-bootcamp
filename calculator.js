const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res){
    var weight1 = parseFloat(req.body.weight);
    var height1 = parseFloat(req.body.height);
    var bmi = Math.round(weight1 / (height1 * height1));
    res.send("Your BMI is " + bmi); 
});


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    var numero1 = Number(req.body.num1);
    var numero2 = Number(req.body.num2);
    var result = numero1 + numero2;
    res.send("Your result is " + result);
});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});