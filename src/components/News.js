import React, {useEffect, useState} from 'react'
import { fetchNews } from '../services/news.service';
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

const News = async (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const init = async () => { 
    const queryParameters = new URLSearchParams(window.location.search)
  const category = queryParameters.get("category")
    console.log ('category',category);
    if(category && category == ''){
      console.log ("insideIf");
      const data = await fetchNews(0,category)
    }
    else{
      console.log ("InsideElse");
      const data = await fetchNews()
    }
    
    let parsedData = data.json();
    console.log(parsedData);
    setArticles(parsedData.articles );

  }
   useEffect( init , []);
  

 const handlePrevClick = async () => {
    console.log("previous");
    setPage(page-1)
   
    let data = await fetchNews(page);
    let parsedData = await data.json();
    console.log(parsedData);

      setArticles(parsedData.articles)
    
  };
 const handleNextClick = async () => {
    console.log("next");
    setLoading(true)
    setPage(page+1)

    let data = await fetchNews(page);
    let parsedData = data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setLoading(false)
  };
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsHeadlines</h1>
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={tpage <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  
}
News.defaultProps = {
  country: 'in',
  category: 'sports',
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
}
export default News;
