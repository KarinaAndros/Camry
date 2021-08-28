let answer_one = document.querySelector(".answer_one");
let up1 = document.querySelector(".up1");
let down1 = document.querySelector(".down1");
let answer_two = document.querySelector(".answer_two");
let up2 = document.querySelector(".up2");
let down2 = document.querySelector(".down2");
let answer_three = document.querySelector(".answer_three");
let up3 = document.querySelector(".up3");
let down3 = document.querySelector(".down3");
let answer_four = document.querySelector(".answer_four");
let up4 = document.querySelector(".up4");
let down4 = document.querySelector(".down4");

let answer_five = document.querySelector(".answer_five");
let up5 = document.querySelector(".up5");
let down5 = document.querySelector(".down5");
let answer_six = document.querySelector(".answer_six");
let up6 = document.querySelector(".up6");
let down6 = document.querySelector(".down6");
let answer_seven = document.querySelector(".answer_seven");
let up7 = document.querySelector(".up7");
let down7 = document.querySelector(".down7");
let answer_eight = document.querySelector(".answer_eight");
let up8 = document.querySelector(".up8");
let down8 = document.querySelector(".down8");

// Scroll
new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage']
});

// FAQ
function show(p, up, down) {
    p.style.display = "block"
    if (p.style.display = "block") {
        down.style.display = "none";
        up.style.display = "block";

    }
}

function hide(p, up, down) {
    p.style.display = "none"
    if (p.style.display = "none") {
        up.style.display = "none";
        down.style.display = "block";
    }
}



// Timer

document.addEventListener('DOMContentLoaded', function() {

    const deadline = new Date(2021, 08, 01);

    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.textContent = days < 10 ? '0' + days : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
});