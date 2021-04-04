document.addEventListener('DOMContentLoaded', () => {
const startbtn = document.querySelector("#start-button")
const timeDisplay = document.querySelector('#time-left')
let timeLeft = 10

function countDown(){
setInterval(function(){
  if(timeLeft <=0){
    clearInterval(timeLeft = 0)
    document.querySelector('#game').click()
  }
  timeDisplay.innerHTML=timeLeft
  timeLeft -= 1
},1000)
}


startbtn.addEventListener('onload',countDown())
})