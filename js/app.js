let menus = document.querySelector('#menus');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menus.addEventListener('click', ()=>{
    menus.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menus.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}

let countDown = new Date('february 14, 2023 00:00:00').getTime();

function CountDown(){
    let now = new Date().getTime();
    gap = countDown - now;

    let second = 1000;
    let minute = second * 60;
    let hours = minute * 60;
    let day = hours * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap%(day)) / (hours));
    let m = Math.floor((gap%(hours)) / (minute));
    let s = Math.floor((gap%(minute)) / (second));
    console.log(m, s);

    document.getElementById('day').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function() {
    CountDown();
}, 1000);