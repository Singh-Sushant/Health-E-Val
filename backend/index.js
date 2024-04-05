const express = require('express')
const app = express();


const PORT = 4000

app.get('/' , (req,res)=>{
    res.send('you are in / directory ')
})



app.listen(PORT , ()=>{
    console.log('server up and running at port : ' , PORT);
})