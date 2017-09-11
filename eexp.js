var request=require('request');
var article=require('./model/article');
var mongoose=require('mongoose');
var promise = mongoose.connect('mongodb://localhost:8080/chatapp', {
    useMongoClient: true,
});

var z=new article({
    title:'a',
    description:'b',
    publish_date:'23'
});

z.save(function () {
   console.log("nak bnaa")
})

article.find(function (err,dosc) {
    console.log(dosc);
    console.log(dosc.length);
});
