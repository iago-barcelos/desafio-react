import { useContext, useEffect, useState } from "react";
import NewsContext from "../context/NewsContext";
import ReadTheNewsHere from "./ReadTheNewsHere";
import FavoriteButton from "./FavoriteButton";
import FavoriteContext from "../context/FavoriteContext";

function NewsCards() {
  // Cria os estados para armazenar as informações
  const [visibleNewsCount, setVisibleNewsCount] = useState(9);

  // Invoca o NewsContext, que é o array advindo da API
  const news = useContext(NewsContext);

  // Invoca o FavoriteContext e desestrutura
  const favoritesContext = useContext(FavoriteContext);
  const { favorites ,toggleFavorite } = favoritesContext

  useEffect(() => {
    console.log('Favoritos atualizados:', favorites);
  }, [favorites]);
  

  // retorna null se não há notícias ou o array está vazio
  if (!news|| news.length === 0) {
    return null
  }

  // Usa slice para obter as notícias a serem exibidas com base em visibleNews
  const remainingNews = news.slice(1);
  const visibleNews = remainingNews.slice(0, visibleNewsCount);

  // Atualiza o estado das notícias favoritas quando o botão de favoritar é clicado
  function handleFavoriteClick(newsId: number) {
    console.log('Clicado para favoritar:', newsId);
    toggleFavorite(newsId); 
  }

  // Incrementa o número de notícias visíveis quando o botão "Mais notícias" é clicado.
  function handleLoadMoreClick() {
    setVisibleNewsCount((prevCount) => prevCount + 9);
  }
  
  return (
    <div>
        { visibleNews.map((item) => (
          <section key={item.id}>
            <div>
              <h3>{item.titulo}</h3>
              <p>{item.introducao}</p>
              <ReadTheNewsHere 
                link={ item.link }
                onClick={ () => window.open(item.link, "_blank") }
              />
            </div>
            <div>
              <FavoriteButton 
                isFavorite={favorites.includes(item.id)}
                onClick={() => handleFavoriteClick(item.id)}
              />
            </div>
          </section>  
        )) }
        <div>
          { visibleNewsCount < remainingNews.length && 
          (
            <button  onClick={ handleLoadMoreClick }>
              Mais notícias
            </button>
          ) }
        </div>    
    </div>
  );
}

export default NewsCards;
