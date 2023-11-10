const user_input = document.querySelector("#my_input")
const btn = document.querySelector('button')
const guess_list = document.querySelector('#guess_list')
const remaining_attempts = document.querySelector('#remaining')


// Generating a random number
const random = Math.floor(Math.random() * 100 ) + 1

const prev_guess = []


let want_to_play = true


if (want_to_play) {
    btn.addEventListener("click", function(e){
        e.preventDefault()
        const user_guess = parseInt(user_input.value)
        validating(user_guess)
        console.log(prev_guess);
    })
}

// validating function

// check userguuess with some conditions - validating
// using this function inside main function
function validating(guess){
    if (guess < 1){
        alert("Your Guess less than 1 - Try 1-100")
    }else if(guess > 100){
        alert("Your Guess greater than 100 - Try 1-100")
    }else if(isNaN(guess)){
        alert("Enter a valid number 1-100")
    }else {
        console.log(guess);
        all_guess(guess)
    }
}



// This function will add all inputs to array of prev_guess
function all_guess(val){
    let hello = prev_guess.push(val)
}