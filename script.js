let displaytime = ()=> {
    let time = new Date();
    let clock= document.getElementById("clock");
    clock.innerHTML = `<p id = "date"> ${time.toDateString()}</p><br><br>
    <p id = "time">${time.toLocaleTimeString()}</p>`;

    

console.log(clock);
};

setInterval(displaytime, 1000);