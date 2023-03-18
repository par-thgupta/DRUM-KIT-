console.log("connected")

let noOfButton = document.querySelectorAll('.drum').length;
for (let i = 0; i < noOfButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        makeanimation(this.innerHTML);
        sound(this.innerHTML);
    });
}

document.addEventListener('keypress', function (event) {
    makeanimation(event.key);
    sound(event.key);
});

function makeanimation(key){
    let press = document.querySelector('.'+key);
    press.classList.add("press");
    setTimeout(function() {
        press.classList.remove("press");
    }, 200);
}
function sound(key) {

    switch (key) {
        case "a":
            let tone1 = new Audio("sounds_boom.wav");
            tone1.play();
            break;
        case "s":
            let tone2 = new Audio("sounds_clap.wav");
            tone2.play();
            break;
        case "d":
            let tone3 = new Audio("sounds_hihat.wav");
            tone3.play();
            break;
        case "f":
            let tone4 = new Audio("sounds_kick.wav");
            tone4.play();
            break;
        case "g":
            let tone5 = new Audio("sounds_openhat.wav");
            tone5.play();
            break;
        case "h":
            let tone6 = new Audio("sounds_ride.wav");
            tone6.play();
            break;
        case "j":
            let tone7 = new Audio("sounds_snare.wav");
            tone7.play();
            break;
        case "k":
            let tone8 = new Audio("sounds_tink.wav");
            tone8.play();
            break;
        case "l":
            let tone9 = new Audio("sounds_tom.wav");
            tone9.play();
            break;
    }
}