import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import ReadTheNewsHere from "./ReadTheNewsHere";

function NewsCards() {
  const news = useContext(NewsContext);

  const newsCards = news.slice(1,10)
  
  return (
    <div>
        { newsCards.map((item) => (
          <div key={item.id}>
            <h3>{item.titulo}</h3>
            <p>{item.introducao}</p>
            <ReadTheNewsHere 
              link={ item.link }
              onClick={ () => window.open(item.link, "_blank") }
            />
          </div>
        )) }
    </div>
  );
}

export default NewsCards;
