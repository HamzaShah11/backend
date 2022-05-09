const client = require('./connection.js')
const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
 
app.use(cors());
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})


app.get('/students', (req, res)=>{
    client.query(`Select * from students`, (err, result)=>{
        if(!err){
            res.json(result.rows);
        }
        else{
    console.log(err);
        }
    });
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into students (id, FirstName, LastName, Location) 
                       values('${user.id}','${user.FirstName}', '${user.LastName}', '${user.Location}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update students
                       set FirstName = '${user.FirstName}',
                       LastName = '${user.LastName}',
                       Location = '${user.Location}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from students where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


//books

app.get('/books', (req, res)=>{
    client.query(`Select * from books`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/books', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into books (id, bookname, author, borrowedby, borrowdate, returndate) 
                       values('${user.id}','${user.bookname}', '${user.author}', '${user.borrowedby}','${user.borrowdate}', '${user.returndate}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.json('Insertion was successful');
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.put('/books/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update books
                       set bookname = '${user.bookname}',
                       author = '${user.author}',
                       borrowedby = '${user.borrowedby}'
                       borrowdate = '${user.borrowdate}'
                       returndate = '${user.returndate}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.delete('/books/:id', (req, res)=> {
    let insertQuery = `delete from books where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})



client.connect();