const Post=require('../models/post');
const User= require('../models/user');

module.exports.home = async function(req, res){              //cookies are in req
     //console.log(req.cookies);
  try{
    let posts  = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate:{
            path:'user'
        }
    });
  let users = await User.find({});
  return res.render('home',{
    title :"Codeial || Home",
    posts:posts,
    all_users:users
});
  }
  catch(err){
        console.log('Error', err);
        return;
  }
   

   
}


module.exports.profile = function(req, res){
    return res.end('<h1>Inside profile action</h1>');
}