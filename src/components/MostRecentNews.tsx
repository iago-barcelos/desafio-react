import { useContext } from "react";
import NewsContext from "../context/NewsContext";

function MostRecentNews() {
  const news = useContext(NewsContext);

  // Função para calcular a diferença em dias entre duas datas
  const calculateDaysDifference = (date1: Date, date2: Date) => {
    const diffInTime = Math.abs(date2.getTime() - date1.getTime());
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  // Função para encontrar a notícia mais recente com base na data de publicação
  const findMostRecentNews = () => {
    if (!news || news.length === 0) return { news: null, daysDifference: 0, imageUrl: '' };
  
    const currentDate = new Date();
  
    let mostRecentNews = news[0];
    
    let mostRecentDate = new Date(mostRecentNews.data_publicacao);
    console.log('mostRecentDate:',mostRecentDate)
    //lógica para a data da notícia atual está incorreta, corrigir...
  
    for (let i = 1; i < news.length; i++) {
      const newsDate = new Date(news[i].data_publicacao);
      if (newsDate > mostRecentDate) {
        mostRecentNews = news[i];
        mostRecentDate = newsDate;
      }
    }
  
    const daysDifference = calculateDaysDifference(currentDate, mostRecentDate);
  
    // Extrair a URL da imagem
    let imageUrl = '';
    try {
      const imageInfo = JSON.parse(mostRecentNews.imagens);
      imageUrl = imageInfo.image_intro || '';
    } catch (error) {
      console.error('Erro ao analisar a string JSON:', error);
    }
  
    return { news: mostRecentNews, daysDifference, imageUrl };
  };
  
  

  const { news: mostRecentNewsItem, daysDifference, imageUrl } = findMostRecentNews();

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
      <img src={`https://agenciadenoticias.ibge.gov.br/${imageUrl}`} alt={ mostRecentNewsItem.titulo } />
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
