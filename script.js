var bars = document.querySelector(".menubar")

var navlist = document.querySelector(".navlist")

bars.addEventListener("click",function(){
  bars.classList.toggle("change")
  navlist.classList.toggle("open")
})