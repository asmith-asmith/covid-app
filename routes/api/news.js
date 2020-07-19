const router = require('express').Router();
const newsCtrl = require('../../controllers/api/news-api');

const fetch = require("node-fetch");

var url =  `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI}`
// var url = `https://newsapi.org/v2/everything?q=COVID&from=2020-07-16&sortBy=publishedAt&apiKey=${process.env.NEWSAPI}&pageSize=100&page=2`

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