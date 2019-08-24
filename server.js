const express = require('express');
const bodyParser = require('body-parser');



let app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


const PORT = process.env.PORT || 4000

app.listen(PORT, (err)=>{
    if(err){
        console.log("nothing here", err)
    };
        console.log("Server listening on port 4000...")
        
    })