import { useState } from "react";
import FavoriteContext from "./FavoriteContext";

type FavoriteProviderProps = {
  children: React.ReactNode
}

function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  function toggleFavorite(newsId: number) {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(newsId)) {
        return prevFavorites.filter(id => id !== newsId);
      } 
      return [...prevFavorites, newsId];
    });
  }

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider