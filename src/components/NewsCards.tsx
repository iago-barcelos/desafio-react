import { useContext } from "react";
import NewsContext from "../context/NewsContext";

function NewsCards() {
  const news = useContext(NewsContext);
  
  return (
    <div>
        { news.map((item) => (
          <div key={item.id}>
            <img src={ item.imagens } alt={ item.titulo } />
            <h3>{item.titulo}</h3>
            <p>{item.introducao}</p>
          </div>
        )) }
    </div>
  );
}

export default NewsCards;
