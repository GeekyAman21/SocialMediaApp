const express=require('express');
const app=express();
const port=8000;


//use express router before server start

app.use('/',require('./routes')); //anything after localhost routes will be called

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');




app.listen(port, function(err){
    if(err){
        console.log('error', err);
        console.log(`error in running server : ${err}`);
    }

    console.log(`server is up and running on port  : ${port}` );
})