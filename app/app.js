var express = require('express');
var staticZip = require('express-static-zip');

var app = express();
app.use(express.static('.'));
app.use('/tiles', staticZip('./tiles/0-8.zip'));
app.use('/tiles', staticZip('./tiles/9.zip'));
app.use('/counters', staticZip('./counters/counters.zip'));




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
