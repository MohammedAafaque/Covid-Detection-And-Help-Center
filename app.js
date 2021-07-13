var express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/source'));


app.get("/", function(req, res){
    res.render("globalcases");
})


app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

