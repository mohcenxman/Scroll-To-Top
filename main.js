let spanElement = document.querySelector(".up");

window.onscroll = function() {
    if (this.scrollY >= 1500) {
        spanElement.classList.add("show");
    } else {
        spanElement.classList.remove("show");
    }
};

spanElement.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}