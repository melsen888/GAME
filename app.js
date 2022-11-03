const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req,res){
    res.sendFile(__dirname+'/views/index.html')
})

app.use('/public', express.static('public'))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})