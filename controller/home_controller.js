module.exports.home = function(req, res){              //cookies are in req
     console.log(req.cookies);
    return res.render('home',{
           title :"Home"
    });
}


module.exports.profile = function(req, res){
    return res.end('<h1>Inside profile action</h1>');
}