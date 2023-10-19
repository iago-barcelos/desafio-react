import { useEffect, useState } from 'react';
import { NewsType } from './types';
import Header from './components/Header';
import NewsContext from './context/NewsContext';
import MostRecentNews from './components/MostRecentNews';
import NewsCards from './components/NewsCards';
import FilterBar from './components/FilterBar';
import FavoriteProvider from './context/FavoriteProvider';

function App() {
  const [news, setNews] = useState<NewsType[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);
  const [favoriteNews, setFavoriteNews] = useState<number[]>([])
  const [activeFilter, setActiveFilter] = useState("Mais Recentes");

  useEffect(() => {
    async function getFetch() {
      try {
        const request = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');

        if (!request.ok) {
          throw new Error ('Failed to fetch API')
        }
        
        const response = await request.json();
        const newsArray = response.items
        /* console.log(newsArray) */
        setNews(newsArray);
        setFilteredNews(newsArray);
      } catch(error) {
        console.error('Erros fetching data:', error)
      }
    }
    getFetch();
  }, []);


  function handleFilterChange(filter: string) {
    setActiveFilter(filter);

    if (filter === "Mais Recentes") {
      setFilteredNews(news);
      console.log('mais recentes');

    } else if (filter === "Release") {
      setFilteredNews(news.filter(item => item.tipo === "Release"));
      console.log('release');

    } else if (filter === "Notícia") {
      setFilteredNews(news.filter(item => item.tipo === "Notícia"));
      console.log('notícia');

    } else if (filter === "Favoritas") {
      const filteredFavoriteNews = news.filter((item) => favoriteNews.includes(item.id));

      setFilteredNews(filteredFavoriteNews);

      console.log('setFilteredNews', filteredFavoriteNews);
    }
  }

  return (
    <NewsContext.Provider value={ news }>
      <FavoriteProvider>
        <Header />
        <MostRecentNews />
        <FilterBar 
          onFilterChange={ handleFilterChange }
          stringFilter={ activeFilter }
        />
        <NewsCards />
      </FavoriteProvider>
    </NewsContext.Provider>
  )
}

export default App
