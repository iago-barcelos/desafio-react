import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import ReadTheNewsHere from "./ReadTheNewsHere";
import FavoriteButton from "./FavoriteButton";
import FavoriteContext from "../context/FavoriteContext";
import { NewsType } from "../types";
import FilterBar from "./FilterBar";

function NewsCards() {
  // Cria os estados para armazenar as informações
  const [visibleNewsCount, setVisibleNewsCount] = useState(9);
  const [filter, setFilter] = useState("Mais Recentes");
  

  // Invoca o NewsContext, que é o array advindo da API
  const news = useContext(NewsContext);

  // Invoca o FavoriteContext e desestrutura
  const favoritesContext = useContext(FavoriteContext);
  const { favorites ,toggleFavorite } = favoritesContext

  /* useEffect(() => {
  }, [favorites]); */
  /* console.log('Favoritos atualizados:', favorites); */
  

  // retorna null se não há notícias ou o array está vazio
  if (!news|| news.length === 0) {
    return null
  }

  // Usa slice para obter as notícias a serem exibidas com base em visibleNews
  const remainingNews = news.slice(1);
  const firstNineNews = remainingNews.slice(0, visibleNewsCount);

  // Atualiza o estado das notícias favoritas quando o botão de favoritar é clicado
  function handleFavoriteClick(news: NewsType) {
    /* console.log('Clicado para favoritar:', news.id); */
    toggleFavorite(news.id)
    ; 
  }

  // Incrementa o número de notícias visíveis quando o botão "Mais notícias" é clicado.
  function handleLoadMoreClick() {
    setVisibleNewsCount((prevCount) => prevCount + 9);
  }

  function handleFilterBarChange(filter: string) {
    if (filter === "Mais Recentes") {
      setFilter("Mais Recentes")
    } else if (filter === "Release" || filter === "Notícia") {
      const filtered = news.filter((item) => item.tipo === filter);
      console.log(filtered);
    } else if (filter === "Favoritas") {
      favorites.length === 0 ? console.log('sem favoritos') : console.log(favorites)
    }
  }


  
  return (
    <div>
        <FilterBar 
          onFilterChange={ handleFilterBarChange }
          stringFilter={ filter }
        />
        { firstNineNews.map((item) => (
          <section key={item.id}>
            <div>
              <h3>{`${item.titulo}(ID: ${item.id}, Tipo: ${item.tipo})`}</h3>
              <p>{item.introducao}</p>
              
              <ReadTheNewsHere 
                link={ item.link }
                onClick={ () => window.open(item.link, "_blank") }
              />
            </div>
            <div>
              <FavoriteButton 
                isFavorite={favorites.includes(item.id)}
                onClick={() => handleFavoriteClick(item)}
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
