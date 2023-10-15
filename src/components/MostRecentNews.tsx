import { useContext } from "react";
import NewsContext from "../context/NewsContext";

function MostRecentNews() {
  const news = useContext(NewsContext);

  return (
    <div>
      <h2>Notícia mais recente</h2>
        { news.map((news) => (
          <div key={ news.id }>
            
          </div>
        )) }
    </div>  
  );
}

export default MostRecentNews;