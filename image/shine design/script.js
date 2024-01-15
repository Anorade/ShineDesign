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