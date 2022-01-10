/*const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

*/

const EventEmitter = require('events');
const eventEmitter = require('events');
const emitter=new EventEmitter();
emitter.on('messageLogged',function(arg){
    console.log(arg.name);
});

emitter.emit('messageLogged',{name: 'Kushal'});