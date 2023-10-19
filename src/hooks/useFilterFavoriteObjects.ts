/* import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import FavoriteContext from "../context/FavoriteContext"; */
import { NewsType } from "../types";

function useFilterFavoriteObjects(news : NewsType[], favorites: number[]) {

  const filteredObjects = news.filter((object) => favorites.includes(object.id));

  return filteredObjects
}

export default useFilterFavoriteObjects;