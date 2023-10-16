import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import { calculateDaysDifference } from "../utils/function";

function MostRecentNews() {
  const news = useContext(NewsContext);

  // Função para encontrar a notícia mais recente com base na data de publicação
  const findMostRecentNews = () => {
    if (!news || news.length === 0) return { news: null, daysDifference: 0, imageUrl: '' };
  
    const currentDate = new Date();
    
    const mostRecentNews = news[0];
    const dateSplit = mostRecentNews.data_publicacao.split('/')
    const day = parseInt(dateSplit[0], 10);
    const month = parseInt(dateSplit[1], 10) -1;
    const year = parseInt(dateSplit[2], 10)

    const date = new Date (year, month, day)
    console.log(date)
    
    const mostRecentDate = new Date(date);
  
    const daysDifference = calculateDaysDifference(currentDate, mostRecentDate);
    console.log(daysDifference)
  
    const imageInfo = JSON.parse(mostRecentNews.imagens);
    const imageURL = imageInfo.image_intro;
  
    return { news: mostRecentNews, daysDifference, imageURL };
  };
  

  const { news: mostRecentNewsItem, daysDifference, imageURL } = findMostRecentNews();

  if (!mostRecentNewsItem) {
    return null;
  }

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
        <p>{displayDate}</p>
        <button
          onClick={ () => window.open(mostRecentNewsItem.link, "_blank") }
        >
          Leia a notícia aqui
        </button>
      </div>
    </div>
  );
}

export default MostRecentNews;
