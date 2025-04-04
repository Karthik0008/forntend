import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "287e2d9039374ab5af5de2ef8e74e680";  // Replace with your actual API key
const API_URL = `https://newsapi.org/v2/everything?q=tesla&from=2025-03-04&sortBy=publishedAt&apiKey=${API_KEY}`;

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Latest News</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              {article.urlToImage && (
                <img src={article.urlToImage} className="card-img-top" alt="news" />
              )}
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}