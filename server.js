const express = require('express');
const bodyParser = require('body-parser');


let app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000

app.listen(PORT, (err)=>{
    if(err){
        console.log("nothing here", err)
    };
        console.log("Server listening on port 5000...")
        
    })