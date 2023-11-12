const user_input = document.querySelector("#my_input")
const btn = document.querySelector('button')
const guess_list = document.querySelector('#guess_list')
const remaining_attempts = document.querySelector('#remaining')
const message = document.querySelector('#msg')
const user_status = document.querySelector('#user_status')


// Generating a random number
let random_num = Math.floor(Math.random() * 100 ) + 1
console.log(random_num);

let prev_guess = []
let guess_count = 1


let want_to_play = true


if (want_to_play) {
    btn.addEventListener("click", function(e){
        e.preventDefault()
        const user_guess = parseInt(user_input.value)
        validating(user_guess)
        // console.log(prev_guess);
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
        console.log(user_input.value);
        all_guess(guess)  // appending all the guesses to empty array
        correct_guess(guess)
    }
}

function correct_guess(guess){
    if (guess_count >= 2) {
        showmsg(`GAME OVER - Correct Number is ${random_num}`)
        reset_values_msg(guess)
        gameend()
    }else {
        checking(guess)
        reset_values_msg(guess)
    }
}

function checking(guess){
    if(guess === random_num){
        showmsg(`Your Guess is right. ------ Won ------`)
        gameend()

    }else if(guess > random_num){
        showmsg('Number is high -  Make another guess')
    }else if (guess < random_num){
        showmsg('Number is low - Make another guess')
    }
}

function reset_values_msg(guess){
    user_input.value = '';
    guess_list.innerHTML += ` ${guess},`
    guess_count++
    remaining_attempts.innerHTML = `${11- guess_count}`

}

function showmsg(msg){
    message.innerHTML = `${msg}`
}


// This function will add all inputs to array of prev_guess
function all_guess(val){
    let hello = prev_guess.push(val)
}

let bt = document.createElement('button')

// ending game - disabling userinput so that can't write - and adding button for new game
function gameend(){
    user_input.value = ''
    user_input.setAttribute('disabled', '')

    // creating new button for new game
    bt.classList.add('user_status_btn')
    bt.innerText = 'New Game'
    user_status.appendChild(bt)
    // setting want_to_play to false
    want_to_play = false
    newgame()
}


// resetting all the value - back to normal - after clicking new game button
function newgame(){
    bt.addEventListener('click', function(){
    let random_num = Math.floor(Math.random() * 100 ) + 1
    prev_guess = []
    guess_count = 1
    guess_list.innerHTML = ''
    remaining_attempts.innerHTML = `${11- guess_count}`
    user_input.removeAttribute('disabled')
    user_status.removeChild(bt)
    message.innerHTML = 'hello'
    want_to_play = true
    })
}