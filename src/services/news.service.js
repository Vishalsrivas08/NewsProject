const apiEndPoint = "https://newsapi.org/";

export const fetchNews = () => {
    let url = apiEndPoint+"v2/top-headlines?country=in&apiKey=52618249e0b742ba91e874d5e3498413&pageSize=12";
    return fetch(url);
} 