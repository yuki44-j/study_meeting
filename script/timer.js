'use strict';

function countdown(goal) {
    const now = new Date();
    const rest = goal - now.getTime();
    return rest;
}

function reclac() {
    const now = new Date();
    const counter = goal - now.getTime();
    const sec = parseInt((counter / 1000) % 60);
    const min = parseInt((counter / 1000 / 60) % 60);
    const time = String(min).padStart(2, '0') + '分' + String(sec).padStart(2, '0') + '秒';
    /* const counter = countdown(goal); */
    if (counter > 0) {
        document.getElementById('rest').textContent = time;

        setTimeout(reclac, 1000);
    } else {
        document.getElementsById('rest').textContent = '00分00秒';
    }  
}

/* let now = new Date();
let goal = now.getTime() + 1 * 60 * 1000; */

let goal;
let start = document.getElementById('timer');

/* start.addEventListener('click', function() {
    let now = new Date();
    goal = now.getTime() + 5 * 60 * 1000;
    reclac()
}, false); */

start.onclick = function() {
    let now = new Date();
    goal = now.getTime() + 5 * 60 * 1000;
    reclac();
}