

const lightButton = document.getElementById('light')
const darkButton = document.getElementById('dark')
const dawnButton = document.getElementById('dawn')

const body = document.body  ;
const theme = localStorage.getItem('theme')


if (theme) {
    body.classList.add('theme')
}


lightButton.onclick = () => {
    body.classList.remove(...body.classList)
    body.classList.add('light')

    localStorage.setItem('theme', 'light');
}

darkButton.onclick = () => {
    body.classList.remove(...body.classList)
    body.classList.add('dark')

    localStorage.setItem('theme', 'dark');
}

dawnButton.onclick = () => {
    body.classList.remove(...body.classList)
    body.classList.add('dawn') 

    localStorage.setItem('dawn', true)
    
}


 