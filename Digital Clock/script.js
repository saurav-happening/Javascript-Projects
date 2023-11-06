 const current_time = document.getElementById("clock")



// this will update current time every 1 second
setInterval(function(){
    const date = new Date()
    // time = date.toLocaleTimeString()
    current_time.innerHTML = date.toLocaleTimeString();
}, 1000)