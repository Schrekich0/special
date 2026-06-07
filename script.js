

function toggleText(index){

    const texts =
    document.querySelectorAll(".text");

    texts[index].classList.toggle("show");
}


function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },7000);
}

setInterval(createHeart, 250);