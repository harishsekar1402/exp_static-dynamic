const express = require('express');
const about = express()

about.get('/',(req,res)=>{
    res.send(`
    <p>This is about page.....</p>
    `)
})
module.exports=about