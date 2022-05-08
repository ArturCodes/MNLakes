
let light = localStorage.getItem('light')
let dawn = localStorage.getItem('dawn')
let dark = localStorage.getItem('dark');

const body = document.querySelector('body');
const lightButton = document.getElementById('light')
const darkButton = document.getElementById('dark')
const dawnButton = document.getElementById('dawn')

const theme = localStorage.getItem('theme')


if (theme) {
    body.classList.add('theme')
}


lightButton.onClick = () => {
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')

darkButton.onClick = () => {
    body.classList.replace('light', 'dark ')
    localStorage.setItem('theme', 'dark')
}

dawnButton.onClick = () => {
    if (body.classList.contains('dawn')) {
        body.classList.remove('dawn')
        localStorage.removeItem('dawn')
    } else {
        body.classList.add('dawn')
        localStorage.setItem('dawn', true)
    }
}


// Footer button, optional. This is for if you have a second dark mode toggle button
//in the footer, just make sure the button is inside the footer tag, and it will be
//linked to this function.

    darkModeToggleFooter.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
