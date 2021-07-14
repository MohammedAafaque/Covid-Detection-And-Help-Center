var express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/source'));
const fetch = require("node-fetch");



app.get("/", function(req, res){
    url = "https://corona.lmao.ninja/v2/countries";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
    res.render("globalcases", {allData:data});
    });
})


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

