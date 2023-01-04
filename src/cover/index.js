import $ from 'jquery'
import styles1 from './index.module.css'
import movie from '@/asset/movie.mp4'
import audio from '@/asset/music.mp3'
function init () {
  const container = $('<div>').addClass(styles1.container).appendTo('#app')
  const vio = $('<video>').prop('src', movie).prop('autoplay', true).prop('loop', true).addClass(styles1.video).appendTo(container)
  const aud = $('<audio>').prop('src', audio).prop('autoplay', true).prop('loop', true).appendTo(container)
  const title = $('<h1>').text('豆瓣电影').addClass(styles1.title).appendTo(container)
  $(window).on('scroll', function() {
    const scrollTop = document.documentElement.scrollTop
    const vHeight = document.documentElement.clientHeight
    if (scrollTop >= vHeight) {
      vio[0].pause()
      aud[0].pause()
    } else {
      vio[0].play()
      aud[0].play()
    }
  })
}
init()  