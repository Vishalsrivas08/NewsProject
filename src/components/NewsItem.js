
import React from "react";

const NewsItem = (props) =>{
    
    let { title, description, imageUrl, newsUrl} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/2/29/Municipal_Corporation_of_Greater_Mumbai_01.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
