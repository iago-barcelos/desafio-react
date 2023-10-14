import { useEffect, useState } from 'react';
import { NewsType } from './types';
import Header from './components/Header';
import NewsContext from './context/NewsContext';

function App() {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    async function getFetch() {
      const request = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const response = await request.json();
      const newsArray = response.items
      console.log(newsArray)
      setNews(newsArray)
    }
    getFetch();
  }, []);

  news

  return (
    <NewsContext.Provider value={ { news } }>
      <Header />
    </NewsContext.Provider>
  )
}

export default App
