const user_input = document.querySelector("#my_input")
const btn = document.querySelector('button')

btn.addEventListener("click", function(e){
    e.preventDefault()
    const val = document.querySelector("#my_input").value
    console.log(val);
})