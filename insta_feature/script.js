let symbol = document.querySelector("i")


let ccc = document.querySelector("#myelement"); 

ccc.addEventListener("dblclick", function() {
    // when i will double click this will happen-- targeting icon
  symbol.style.transform = "translate(-50%,-50%) scale(1)";
  symbol.style.opacity = 1
  symbol.style.color = "#AA336A"

  // after 1 and 2 seconds-- targeting icon
  setTimeout(function(){
    symbol.style.opacity = 0
  },1000)
  setTimeout(function(){
    symbol.style.transform = "translate(-50%,-50%) scale(0)";
  },2000)  


});

// add a h1 on top of story write story
// make a functionable heart button at after container on right side -- that will all -able to trigger icon.


