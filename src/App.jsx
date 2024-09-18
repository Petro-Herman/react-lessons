// import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ArticleList from "./ArticleList";
import { fetchArticlesWithTopic } from "./articles-api";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic("react");
        // const response = await axios.get(
        //   "https://hn.algolia.com/api/v1/search?query=react"
        // );
        setArticles(data);
        // } catch (error) {
        setError(true);
        // обробка помилки
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>

      {loading && <p>Loading data, please wait...</p>}

      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}

      {articles.length > 0 && (
        // (
        //   <ul>
        //     {articles.map(({objectID, url, title}) => (
        //       <li key={objectID}>
        //         <a href={url} target="_blank" rel="noreferrer noopener">{title}</a>
        //       </li>
        //     ))}
        //   </ul>
        // )
        <ArticleList items={articles} />
      )}
    </div>
  );
}
