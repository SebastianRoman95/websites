const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({exend: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const query = req.body.cityName;
    const apiKey = "d1fd12df32ca9c6d7bcd94b60100b871";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units + "&";
    https.get(url, function(response){
        console.log(response.statusCode);
            response.on("data", function(data){
                const weatherData=JSON.parse(data);
                const temp = weatherData.main.temp;
                const weatherDescription = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                res.write("<p>The weather is currently " + weatherDescription + "</p>");
                res.write("<h1>The temperature in " + query + " is " + temp + "degree Celcius.</h1>");
                res.write("<img scr=" + imageURL + ">");
                res.send()
            });
    });
});
app.listen(3000, function(){
    console.log("server 3000");
});

/*
https.get(url, function(response){
        console.log(response.statusCode);
            response.on("data", function(data){
                const weatherData=JSON.stringify(data);
                console.log(weatherData);
            });
    });

    grabbing data
    
*/