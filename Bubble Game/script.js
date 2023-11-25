

// creating bubble div

function creating_bubble(){
    let create_div = ""
    for(let i = 0; i <= 143; i++){
        // creating div using for loop
        
        // generating random number to put inside circle or div.
        const random = Math.floor(Math.random() * 10)
    
    
        create_div += `<div class="bubble">${random}</div>`
    
    
    }
    
    const bottom_panel = document.querySelector("#bottom-panel")
    bottom_panel.innerHTML = create_div
}

// countdown timer

function countdown_timer(){
    let countdown = 5
    let count_timer = setInterval(function(){
    if(countdown>0){
        countdown--;
        // console.log(countdown);
        document.querySelector("#timer").innerHTML = countdown
    } else{
        clearInterval(count_timer)
    }
},1000)

}

// hit counter - changing hit number

function hit_value(){
    let random_num = Math.floor(Math.random() * 10)
    document.querySelector("#hit").innerHTML = random_num
    console.log(random_num);
}



// capturing click event on bubble

let bubble = document.querySelector("#bottom-panel")
bubble.addEventListener("click", function(e){
    console.log(e.target.innerHTML);
})


hit_value()
countdown_timer()
creating_bubble()





