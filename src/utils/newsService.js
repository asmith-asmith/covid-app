const BASE_URL = '/api/news';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => {
        // console.log('get all res',res)
        
        return res.json() });
}
  