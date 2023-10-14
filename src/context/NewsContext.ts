import { createContext } from "react";
import { NewsType } from "../types";

const NewsContext = createContext({} as NewsType);

export default NewsContext;