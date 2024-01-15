let page = document.querySelector(".body");
let btn = document.querySelector(".themeButton");
let button = document.querySelector(".button");
btn.onclick = function() {
    page.classList.toggle("lighTheme");
    page.classList.toggle("darkTheme");
}

button.addEventListener('click', function(){
    alert('Ваша заявка отправлена!')
});

let burger_menu = document.querySelector(".burger-menu")
let nav = document.querySelector(".nav")
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});
