const User = require('../models/user');



module.exports.profile = function(req, res){
        res.render('user_profile', {
            title: "User"
        });
}

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
         title: "Codeial | Sign Up"


    });
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

//get the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err, user){
        if(err){
            console.log('error in finding user',err);
            return;
        }
        console.log(user);
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating while sign up user',err);
                    return;
                } 

                return res.redirect('/users/sign-in');
            });
        }
        else{
            res.redirect('back');
        }
    })

}
//sign in and create a session
module.exports,createSession = function(req, res){

}