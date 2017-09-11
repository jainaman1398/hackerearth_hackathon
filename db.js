
var request=require('request');
var article=require('./model/article');
var mongoose=require('mongoose');
var promise = mongoose.connect('mongodb://localhost:8080/chatapp', {
    useMongoClient: true,
});

var z;

var request = require('request');
request('https://newsapi.org/v1/articles?source=the-times-of-india&apiKey=ca01522dcf414a3b939d824be478e88d', function (error, response, body) {
         t = JSON.parse(body);
          var done=0;

    for (var i = 0; i < t.articles.length;i++ )
    {
               z = new article({
                   title: t.articles[i].title,
                   description: t.articles[i].description,
                   image: t.articles[i].urlToImage,
                   publish_date: t.articles[i].publishedAt,
                   author: t.articles[i].author
               })
        console.log(i);
               z.save(function () {
                   done++;
                   if(done==t.articles.length)
                       exit();
               })
           }

       })


function exit() {
    console.log("yoyo");
    mongoose.disconnect();
}


article.find(function (err,dosc) {
  //   console.log(dosc);
 //   console.log(dosc.length);
});


