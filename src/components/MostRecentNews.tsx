import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import { calculateDaysDifference } from "../utils/function";
import ReadTheNewsHere from "./ReadTheNewsHere";
import FavoriteButton from "./FavoriteButton";
import FavoriteContext from "../context/FavoriteContext";

function MostRecentNews() {
  // Define o estado para o botão de favoritar
  const [favorite, setFavorite] = useState(false);
  const { toggleFavorite, favorites } = useContext(FavoriteContext);

  function handleFavoriteClick() {
    if(mostRecentNewsItem)
    toggleFavorite(mostRecentNewsItem.id)
    setFavorite(!!mostRecentNewsItem)
  }

  // Lê os dados do contexto e armazena na variavel news
  const news = useContext(NewsContext);

  // Função para encontrar a notícia mais recente com base na data de publicação
  const findMostRecentNews = () => {
    if (!news || news.length === 0) return { news: null, daysDifference: 0, imageUrl: '' };
    
    // Armazena a data atual na variável currentDate
    const currentDate = new Date();
    
    // Esse bloco de código separa as informações da chave data_publicacao
    const mostRecentNews = news[0];
    const dateSplit = mostRecentNews.data_publicacao.split('/')
    const day = parseInt(dateSplit[0], 10);
    const month = parseInt(dateSplit[1], 10) -1;
    const year = parseInt(dateSplit[2], 10)

    // Utiliza o Date constructor para adequar o formato da data e armazena na variável mostRecentDate
    const date = new Date (year, month, day)
    const mostRecentDate = new Date(date);

    // Utiliza a função calculateDaysDifference para calcular a diferença entre currentDate e mostRecentDate
    const daysDifference = calculateDaysDifference(currentDate, mostRecentDate);

    // Utiliza o método JSON.parse para tratar o dado da chave imagens do retorno da API
    const imageInfo = JSON.parse(mostRecentNews.imagens);
    const imageURL = imageInfo.image_intro;
  
    // Retorna o objeto que será utilizado na renderização das informações
    return { news: mostRecentNews, daysDifference, imageURL };
  };
  
  // Desestruturação para utilizar na renderização
  const { news: mostRecentNewsItem, daysDifference, imageURL } = findMostRecentNews();

  // Filtrar os objetos que tenham o id igual ao array de id's favoritados
  const filteredObjects = news.filter((object) => favorites.includes(object.id));

  console.log('Objetos Filtrados',filteredObjects);

  if (!mostRecentNewsItem) {
    return null;
  }

  // Se daysDifference for 0, a notícia é de hoje, caso contrário escreve "X dias atrás"
  let displayDate = "";
  if (daysDifference === 0) {
    displayDate = "Hoje";
  } else {
    displayDate = `${daysDifference} dia${daysDifference !== 1 ? "s" : ""} atrás`;
  }

  return (
    <div>
      <img src={`https://agenciadenoticias.ibge.gov.br/${imageURL}`} alt={ mostRecentNewsItem.titulo } />
      <div>
        <h1>Notícia mais recente</h1>
        <h2>{mostRecentNewsItem.titulo}</h2>
        <p>{mostRecentNewsItem.introducao}</p>
        {favorites.map((favorite) => (
          <p key={favorite}>{favorite}</p>
        ))}
        <div>
          <p>{displayDate}</p>
          <FavoriteButton 
            isFavorite={favorite} 
            onClick={ () => handleFavoriteClick()}
          />
        </div>

        <ReadTheNewsHere
          link={ mostRecentNewsItem.link } 
          onClick={ () => window.open(mostRecentNewsItem.link, '_blank') }
        />
      </div>
    </div>
  );
}

export default MostRecentNews;
