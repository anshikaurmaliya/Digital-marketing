 var main = document.querySelector(".main")
 var cur  = document.querySelector(".cursor")
 var hero = document.querySelector(".hero")
 main.addEventListener("mousemove",function(dets){
cur.style.left = dets.x+"px"
cur.style.top = dets.y+"px"
 })
 
 hero.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px"
   }) 