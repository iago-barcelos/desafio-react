import { createContext} from "react";

type FavoriteContextType = {
  favorites: number[];
  toggleFavorite: (newsId: number) => void
}

const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  toggleFavorite: () => {}
})



export default FavoriteContext;