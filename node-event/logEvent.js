
const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

console.log(uuid());
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path'); 

const logEvents = async (message, message2) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t ${message} status: ${message2}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
    } catch (err){
        console.log(err);
    }
}

//console.log('haha');
module.exports = logEvents;