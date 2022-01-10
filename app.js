function sayHello(name){
    console.log(name);
}

sayHello("Kushal");

// can also put global.module if it is a global object.
console.log(module);

const loggger=require('.//logger');
console.log(loggger);
loggger.log1("Kushal Shah");