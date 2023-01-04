import $ from 'jquery'
import styles from './index.module.less'
let container
function init () {
  container = $('<div>').addClass(styles.container).appendTo('#app')
}
init()
export function createMoviesTag (movies) {
  const temp =movies.map(m => {
    return `<div class="item">
            <a href="${m.url}" target="_blank"><img src="${m.cover}" alt="" /></a>
            <a href="${m.url}" target="_blank" class="${styles.title}"><p>${m.title}</p></a>
            <p class="${styles.rate}">${m.rate}</p>
            </div>`
  }).join('')
  $(container).html(temp)
}