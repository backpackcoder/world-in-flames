var express = require('express');
var staticZip = require('express-static-zip');

var app = express();
app.use(express.static('.'));
app.use(staticZip('./tiles.zip'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});