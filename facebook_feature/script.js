let addfriend = document.querySelector("#add")
let current_status = document.querySelector("h5")
let btn = document.querySelector("button")

// let removefriend = document.querySelector("#remove")

let indicator = "on"

addfriend.addEventListener("click",function(){
    if(indicator == "on"){
        current_status.innerHTML = "Friends"
        current_status.style.color = "green"
        btn.innerHTML = "Remove Friend"
        console.log('hello');
        indicator = "off"
    }else {
        current_status.innerHTML = "Stranger"
        current_status.style.color = "red"
        btn.innerHTML = "Add Friend"
        console.log('by');
        indicator = "on"
    }
})













// addfriend.addEventListener("click",function(){
//     current_status.innerHTML = "Friends"
//     current_status.style.color = "green"
// })

// removefriend.addEventListener("click",function(){
//     current_status.innerHTML = "Stranger"
//     current_status.style.color = "red"
// })




