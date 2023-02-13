const apiEndPoint = "https://newsapi.org/";

export const fetchNews = (page=0,category='science',country='in') => {
    let url = apiEndPoint+`v2/top-headlines?country=${country}&category=${category}&apiKey=52618249e0b742ba91e874d5e3498413&page=${
        page
      }&pageSize=12`;
    return fetch(url);
} 
