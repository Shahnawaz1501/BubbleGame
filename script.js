var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = "Game Over";
        }
    }, 1000);
}

function makeBubble() {
    let clutter = "";
    for (let i = 0; i <= 95; i++) {
        var rndmNum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rndmNum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

/* EVENT BUBBLING - jis pe click karoge wo element par event raise hoga aur, event listener na milne par, 
event element ke parent par listener doondhega, wahan bhi na milne par event parent ke parent ke parent par listener doondhega */

document.querySelector("#pbtm").addEventListener("click", function (details) {
    // alert("chal raha hai")
    // console.log(Number(details.target.innerText))
    // console.log(parseInt(details.target.innerText))
    var clickedNumber = parseInt(details.target.innerText);
    if (clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runTimer();
makeBubble();
getNewHit();

