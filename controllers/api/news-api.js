const fetch = require("node-fetch");

// var url = `https://newsapi.org/v2/everything?q=COVID&from=2020-07-17&sortBy=publishedAt&apiKey=${process.env.NEWSAPI}&pageSize=100&page=2`
// http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI}

function index(req,res){
    console.log("here")
    // fetch(url).then(res => res.json()).res.status(404).json(err);
    
}

module.exports = {
    index
}