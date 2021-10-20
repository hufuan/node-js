const express = require('express');
const app = express();

app.use((request, response, next) =>{
    console.log('incoming http request');
    next();
});

app.get('/students', (request, response) =>{
    const students = [
        {id: '001', name: 'tom', age:18},
        {id: '002', name: 'jerry', age:19},
        {id: '003', name: 'tony', age:20}
    ]
    response.send(students);
})

app.listen(5000, (error) =>{
    if (!error) 
        console.log('Server startup successfully, address: http://localhost:5000/students');
});