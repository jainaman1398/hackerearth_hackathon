
var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var news=new Schema({

    Author:{
        type:String
    },
    title:{
        type:String,require:true
    },
    description:{
        type:String ,require:true
    },
    image:{
        type:String
    },
    publish_date:{
        type:String,require:true
    }
})

var article=mongoose.model('article',news);
module.exports=article;