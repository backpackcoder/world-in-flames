var express = require('express');
var staticZip = require('express-static-zip');

var app = express();
app.use(express.static('.'));
app.use('/tiles', staticZip('./tiles/0-8.zip'));
app.use('/tiles', staticZip('./tiles/9.zip'));
app.use('/', staticZip('./counters/counters.zip'));

var AdmZip = require('adm-zip');

// reading archives 
var zip = new AdmZip('./counters/counters.zip');
var zipEntries = zip.getEntries(); // an array of ZipEntry records 
var counters = [];
zipEntries.forEach(function(zipEntry) {
    if (!zipEntry.isDirectory) {
        counters.push({
            'name' : zipEntry.name.replace('.gif',''),
            'url'  : zipEntry.entryName,
        });
    }
});

// Allow us to get the name of the counters
var counterEnpoint = express.Router();
counterEnpoint.get('/', function(req,res){
    return res.json(counters);
});

app.use('/counters', counterEnpoint);


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
