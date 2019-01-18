const express = require('express');
const path = require('path');
const app = express();



const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/nytreact-app/build')));



app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, '/nytreact-app/build/index.html'))
})


app.listen(PORT, (req, res)=> {
    console.log('Listening on port ' + PORT);
})