// selecting all buttons and body
const btn = document.querySelectorAll(".button")
const body = document.querySelector('body')

// we cant add addevenlistner to btn so we need to use foreach

btn.forEach(function (button){ // this is giving each button
    console.log(button);
    button.addEventListener( "click", function(e){
        console.log(e);
        if(e.target.id === "grey"){
            // body.style.backgroundColor = "grey" // hard code value grey
            body.style.backgroundColor = e.target.id // id name is same as colorf

        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id

        } else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id

        } else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id
        }
    })
})