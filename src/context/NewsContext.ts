import { createContext } from "react";
import { NewsType } from "../types";

const NewsContext = createContext<NewsType[]>([]);

export default NewsContext;