const express=require('express');
const app=express();
const port=8000;


//use express router before server start

app.use('/',require('./routes/index'));
app.use('./profile', require('./routes/index'));




app.listen(port, function(err){
    if(err){
        console.log('error', err);
        console.log(`error in running server : ${err}`);
    }

    console.log(`server is up and running on port  : ${port}` );
})