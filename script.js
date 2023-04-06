const switchInput = document.querySelector('input[type="checkbox"]');
const textField = document.querySelector('#text-box');
const nav = document.querySelector('#nav')
const toggleBtn = document.querySelector('#toggle-icon')
const img1 = document.querySelector('#image1')
const img2 = document.querySelector('#image2')
const img3 = document.querySelector('#image3')

function toggleImages(theme) {
    img1.src = `img/undraw_proud_coder_${theme}.svg`;
    img2.src = `img/undraw_feeling_proud_${theme}.svg`;
    img3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

// Dark mode
function darkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
    textField.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleBtn.children[0].textContent = 'Dark mode'
    toggleBtn.children[1].classList.replace('fa-sun', 'fa-moon');
    toggleImages('dark')
}

// Light Mode
function lightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
    textField.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleBtn.children[0].textContent = 'Light mode'
    toggleBtn.children[1].classList.replace('fa-moon', 'fa-sun');
    toggleImages('light')
}

// change theme func
function changeTheme(event) {
    if (event.target.checked) {
        darkMode();
        localStorage.setItem('theme', 'dark')
    } else {
        lightMode();
        localStorage.setItem('theme', 'light')
    }
}

switchInput.addEventListener('click', changeTheme);


// check the last used theme
const lastTheme = localStorage.getItem('theme')
if (lastTheme === 'dark') {
    darkMode();
    switchInput.checked = true;
}
