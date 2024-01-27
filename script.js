// making the navbar mobile responsive
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav_bar');

//I want to make the nav_bar function in a way that it will show its contents on a mobile phone a bit different from that of the desktop mode !
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}