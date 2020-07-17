
var url = `https://newsapi.org/v2/everything?q=COVID&from=2020-07-17&sortBy=publishedAt&apiKey=${process.env.NEWSAPI}&pageSize=100&page=2`
// http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI}

export function getNews() {
    console.log("here", url)
    return (
        fetch(url, {mode: 'cors'}).then(res => res.json())
    )
}