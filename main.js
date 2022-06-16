let currentDay = new Date().getFullYear();
let nextDay = new Date(`May 10 ${currentDay + 1} 00:00:00`);


function updateTiming(){
    let currentTime =  new Date();
    let difference = nextDay - currentTime;
    
    let daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);//days
    let hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;//hours
    let minutesLeft = Math.floor(difference / 1000 / 60 ) % 60;//minutes
    let secondsLeft = Math.floor(difference / 1000) % 60;//seconds
    
    
    let days = document.querySelector('#days1');
    let hours = document.querySelector('#hours1');
    let minutes = document.querySelector('#minutes1');
    let seconds = document.querySelector('#seconds1');
    
    // days.innerText = daysLeft;
    
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    
}
setInterval(updateTiming, 1000);

let clickMenu = document.querySelector('.header__menu')
clickMenu.addEventListener('click', ()=>{
    console.log('+')
})