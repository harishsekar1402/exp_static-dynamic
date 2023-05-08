const express = require('express');
const book = express()

book.get('/',(req,res)=>{
    res.send(`
    This is book page which contains lists of books
    `)
})
module.exports=book