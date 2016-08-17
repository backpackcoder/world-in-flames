var express = require('express');
var staticZip = require('express-static-zip');

var app = express();
app.use(express.static('.'));

// Attach tile endpoints
app.use('/tiles', staticZip('./tiles/0-8.zip'));
app.use('/tiles', staticZip('./tiles/9.zip'));

// Attach counter endpoints
var AdmZip = require('adm-zip');

// reading archives 
var zip = new AdmZip('./counters/counters.zip');
var zipEntries = zip.getEntries(); // an array of ZipEntry records 
var counters = [];
zipEntries.forEach(function(zipEntry) {
    if (!zipEntry.isDirectory &&
        (zipEntry.name.indexOf('B.gif') === -1) &&
        (zipEntry.name.indexOf('Action') !== 0) &&
        (zipEntry.name.indexOf('PatiF') === -1) &&
        (zipEntry.name.indexOf('LiF') === -1) &&
        (zipEntry.name.indexOf('DoD') === -1) &&
        (zipEntry.name.indexOf('PoiF') === -1) &&
        (zipEntry.name.indexOf('WTHER') === -1) &&
        (zipEntry.name.indexOf('FiF') === -1) &&
        (zipEntry.name.indexOf('MiF') === -1) &&
        //(zipEntry.name.indexOf('USSR') === 0) &&
        (zipEntry.name.indexOf('Offensive') === -1)
    ){
        counters.push({
            'name' : zipEntry.name.replace('.gif',''),
            'url'  : zipEntry.entryName.replace('.gif', 'B.gif'),
        });
    }
});
console.log('Found ' + counters.length + ' counters');

// Allow us to get the name of the counters
app.use('/', staticZip('./counters/counters.zip'));
app.use('/counters', express.Router().get('/', function(req, res){
    console.log('counters request query string:', req.query);
    console.log('counters request params:', req.params);

    return res.json(counters);
}));


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
