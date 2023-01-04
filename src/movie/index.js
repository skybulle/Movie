import { getMovies } from "../api/movie";
import { createMoviesTag } from "./list";
import {createPagers} from './pager'
async function init () {
  const resp = await getMovies(1, 30)
  createMoviesTag(resp.data.movieList)
  createPagers(1,30,resp.data.movieTotal)
}
init()