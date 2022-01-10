//for websites with login as a service

// url as a request
var url='http://mylogger.io/log';

function log(message)
{
    //sends an HTTP request
    console.log(message);
}
module.exports.log1=log;
module.exports.endPoint=url;
console.log(__filename);
console.log(__dirname);


