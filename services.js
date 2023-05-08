const express = require('express');
const Server = express()

Server.get('/',(req,res)=>{
    res.send("This is service page")
})

const services = [
    {
        id:1,
        name:'web development'
    },
    {
        id:2,
        name:'mobile app development'
    },
    {
        id:3,
        name:'python programing...'
    },
    {
        id:4,
        name:'C programing'
    },
    {
        id:5,
        name:'DBMS'
    }
]

Server.get('/:no',(req,res)=>{
    const serId = Number(req.params.no)
    const findService = services.find((service)=>{
        service.id=serId
        console.log(findService)
    })
})
module.exports = Server