let loadCircle = document.querySelector(".loadCircle")
let welcomeText = document.querySelector(".welcomeText")
let momosTitle = document.querySelector(".momosTitle")


setTimeout(()=>{
   loadCircle.style.animation = "scaling 0.6s ease forwards"
   loadCircle.style.transform = "scale(17)"
},500)

setTimeout(()=>{
   welcomeText.style.animation = "fadeUp 1s ease forwards"
},1500)

setTimeout(()=>{
   momosTitle.style.animation = "fadeUp 1s ease forwards"
},2500)

