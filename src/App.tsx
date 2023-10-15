import { useEffect, useState } from 'react';
import { NewsType } from './types';
import Header from './components/Header';
import NewsContext from './context/NewsContext';
import MostRecentNews from './components/MostRecentNews';
import NewsCards from './components/NewsCards';

function App() {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    async function getFetch() {
      try {
        const request = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');

        if (!request.ok) {
          throw new Error ('Failed to fetch API')
        }
        
        const response = await request.json();
        const newsArray = response.items
        console.log(newsArray)
        setNews(newsArray)
      } catch(error) {
        console.error('Erros fetching data:', error)
      }
    }
    getFetch();
  }, []);

  return (
    <NewsContext.Provider value={ news }>
      <Header />
      <MostRecentNews />
      <NewsCards />
    </NewsContext.Provider>
  )
}

export default App
