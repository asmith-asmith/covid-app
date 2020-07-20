const router = require('express').Router();
const newsCtrl = require('../../controllers/api/news-api');

const fetch = require("node-fetch");

// var url =  `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI}`
let t = new Date()
let a = t.getDate()
let b = t.getMonth()
let c = t.getFullYear()
if(a<10){
    a=`0${a}`;
} 
if(b<10) {
    b=`0${b}`;
}

var url = `https://newsapi.org/v2/everything?q=COVID&from=${c}-${b}-${a}&sortBy=publishedAt&apiKey=${process.env.NEWSAPI}`

router.get('/', check, function(req, res, next){
    console.log("here inner")
    fetch(url).then(response => response.json()) 
    .then(data => res.json(data) )
 
});


function check(req, res, next){
    console.log('hitting')
    next()
}
module.exports = router;