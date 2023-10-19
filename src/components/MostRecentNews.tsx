import { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import { calculateDaysDifference } from "../utils/function";
import ReadTheNewsHere from "./ReadTheNewsHere";
import FavoriteButton from "./FavoriteButton";
import FavoriteContext from "../context/FavoriteContext";
import * as Style from '../styles/MostRecentStyle';

function MostRecentNews() {
  // Define o estado para o botão de favoritar
  const [favorite, setFavorite] = useState(false);
  const { toggleFavorite } = useContext(FavoriteContext);

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

  // Se não houver notícia mais recente, retorna nulo
  if (!mostRecentNewsItem) {
    return null;
  }

  // Se daysDifference for 0, a notícia é de hoje, caso contrário escreve "X dias atrás"
  let displayDate = "";
  if (daysDifference === 0) {
    displayDate = "Hoje";
  } else {
    displayDate = `Há ${daysDifference} dia${daysDifference !== 1 ? "s" : ""} atrás`;
  }

  return (
    <Style.MostRecentContainerDiv>
      <img src={`https://agenciadenoticias.ibge.gov.br/${imageURL}`} alt={ mostRecentNewsItem.titulo } />
      <Style.MostRecentNewsInfoDiv>
        <Style.MostRecentHeadDiv>
          <Style.TextElementH1>Notícia mais recente</Style.TextElementH1>
          <FavoriteButton 
            isFavorite={favorite} 
            onClick={ () => handleFavoriteClick()}
          />
        </Style.MostRecentHeadDiv>
        <Style.TextElementTitle>{mostRecentNewsItem.titulo}</Style.TextElementTitle>
        <Style.TextElementIntro>{mostRecentNewsItem.introducao}</Style.TextElementIntro>
        <Style.MostRecentDateDiv>
          <Style.DateTextElementP>{displayDate}</Style.DateTextElementP>
          <ReadTheNewsHere
            link={ mostRecentNewsItem.link } 
            onClick={ () => window.open(mostRecentNewsItem.link, '_blank') }
          />
        </Style.MostRecentDateDiv>

      </Style.MostRecentNewsInfoDiv>
    </Style.MostRecentContainerDiv>
  );
}

export default MostRecentNews;
