import { useEffect, useState } from 'react';
import { NewsType } from './types';

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

  return (
    <div>

    </div>
  )
}

export default App
