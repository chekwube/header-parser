var express = require('express');
var useragent = require('express-useragent');
var app = module.exports = express();

app.use(useragent.express());

app.get('/', function(req, res, next){
   var obj = {
       "ipaddress": req.ip, 
       "language": req.acceptsLanguages()[0],
       "software": req.useragent.browser+", "+req.useragent.os
   };
   
   res.json(obj);
});

app.listen(3000);