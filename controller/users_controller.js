const User = require('../models/user');



module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, user){
        res.render('user_profile', {
            title: "User",
            profile_user: user
        });
    });
      
}
module.exports.update = async function(req, res){
    
          try{
               let user= await User.findById(req.params.id);
               User.updoadedAvatar(req,res, function(){
                   if(err){
                       console.log('multer error',err);
                   }
                    // console.log(req.file);
                    user.name=req.body.name;
                    user.email=req.body.email;
                    if(req.file){
                        user.avatar=User.avatarPath + '/' + req.filename;
                    }
                         user.save();
                         return res.redirect('back');
               })
          }
           catch(err){
                req.flash('error', err);
                return res.redirect('back');
           }

 }


module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
      return  res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
         title: "Codeial | Sign Up"


    });
}

module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }

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
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
  return res.redirect('/');
}
module.exports.destroySession = function(req, res){
       req.logout();
       req.flash('success', 'Logged off Successfully');
    return res.redirect('/');
}