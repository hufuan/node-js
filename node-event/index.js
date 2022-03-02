const logEvents = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg, msg2)=> logEvents(msg, msg2));

setTimeout(()=>{
    myEmitter.emit('log', 'Log Event Emitted!', 'OK');
    }, 2000);


