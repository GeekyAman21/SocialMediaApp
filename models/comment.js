const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
      content: {
          type: String,
          required: true
      },
      //comment belog to user
      user:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      post:{
          type:mongoose.Schema.ObjectId,
          ref:'Post'
      }
      

},{
      timestamps:true
});

const Comment = mongoose.model('Comment',commentSchema);
module.exports=Comment;