let noOfButtons = document.querySelectorAll(".letter").length;

for (let i = 0; i < noOfButtons; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function() {
        var letter = this.innerHTML;
        // console.log(letter);
        playSound(letter);
        click_animation(letter);
    });
}


document.addEventListener("keypress", function(evt) {
    // console.log("key = " + evt.key);
    playSound(evt.key);
    click_animation(evt.key);
});

function playSound(key) {
    switch (key) {

        case "z":
            let tik1 = new Audio('resources/1.wav');
            tik1.play();
            break;

        case "x":
            let tik2 = new Audio('resources/2.wav');
            tik2.play();
            break;

        case "q":
            let tik3 = new Audio('resources/3.wav');
            tik3.play();
            break;

        case "w":
            let tik4 = new Audio('resources/4.wav');
            tik4.play();
            break;

        case "e":
            let tik5 = new Audio('resources/5.wav');
            tik5.play();
            break;

        case "r":
            let tik6 = new Audio('resources/6.wav');
            tik6.play();
            break;

        case "t":
            let tik7 = new Audio('resources/7.wav');
            tik7.play();
            break;

        case "y":
            let tik8 = new Audio('resources/8.wav');
            tik8.play();
            break;

        case "a":
            let tik9 = new Audio('resources/9.wav');
            tik9.play();
            break;

        case "s":
            let tik10 = new Audio('resources/10.wav');
            tik10.play();
            break;

        case "d":
            let tik11 = new Audio('resources/11.wav');
            tik11.play();
            break;

    }
}

function click_animation(letter) {
    let clickedButton = document.querySelector("." + letter);
    clickedButton.classList.add("pressed");
    setTimeout(function() {
        clickedButton.classList.remove("pressed");
    }, 100);
}