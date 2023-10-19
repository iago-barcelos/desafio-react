import { NewsType } from "../types";

function useFilterReleaseType (news: NewsType[]) {
  if (news.filter((newsElement) => newsElement.tipo === "Release")) {
    return news
  }

  const filteredObjects = news.filter((news) => news.tipo === "Release" || news.tipo === "Release");

  return filteredObjects;
}

export default useFilterReleaseType;