let create_div = ""

// creating bubble div

for(let i = 0; i <= 143; i++){
    // creating div using for loop
    
    // generating random number to put inside circle or div.
    const random = Math.floor(Math.random() * 10)


    create_div += `<div class="bubble">${random}</div>`


}

const bottom_panel = document.querySelector("#bottom-panel")
bottom_panel.innerHTML = create_div

