const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("Here we go ....did change1 did change2..")
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("server started at port 4000")
})
