var express = require('express') 
var userPage = express.Router() 
userPage.get('/',(req,res)=>{ 
    res.send("hello") 
}) 

userPage.route('/:id').get((req,res)=>{ 
    res.send(`hello pepole whatssup ${request.params.id}`) 
})

userPage.param('id',(req,res,next,id)=>{ 
    console.log(id) 
    next()
})
module.exports=userPage;