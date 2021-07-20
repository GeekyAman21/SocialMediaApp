const express=require('express');
const app=express();
const port=8000;





app.listen(port, function(err){
    if(err){
        console.log('error', err);
        console.log(`error in running server : ${err}`);
    }

    console.log(`server is up and running on port  : ${port}` );
})