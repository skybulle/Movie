import $ from 'jquery'
import styles from './index.module.less'
import { getMovies } from "../../api/movie";
import { createMoviesTag } from "../list";
let container 
function init () {
  container =  $('<div>').addClass(styles.pager).appendTo('#app')
}
init()
export function createPagers (page, limit, total) {
  $(container).empty()
  function createTag (text, status, targetPage) {
  
    const span = $('<span>').appendTo(container).text(text)
    const className = styles[status];
    span.addClass(className)
    if (status === '') {
      span.on('click',async function() {
        const resp = await getMovies(targetPage,limit)
        createMoviesTag(resp.data.movieList)
        createPagers(targetPage,limit,resp.data.movieTotal)
      })
    }
  }
  const pageNum = Math.ceil(total / limit)
  createTag('|<<',page===1?'disabled':'',1)
  createTag('<<', page === 1 ? 'disabled' : '', page - 1)
  const maxCount = 10
  let min =Math.floor(page - maxCount / 2) 
  min < 1 && (min = 1)
  let max = min + maxCount - 1
  max > pageNum && (max = pageNum)
  for (let i = min; i <= max; i++){
    createTag(i,i===page?'active':'', i)
  }
  
  createTag('>>', page ===  pageNum? 'disabled' : '', page + 1)
  createTag('>>|',page ===  pageNum? 'disabled' : '',pageNum)
}