document.querySelector("#go_up").addEventListener("click", scrollUp);

function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}




let burgerMenu = document.querySelector("#menu");

burgerMenu.addEventListener("click", showMenu);
let mobileNav = document.querySelector("#mobile_navbar");


function showMenu() {
    mobileNav.classList.toggle("hidden");

}
