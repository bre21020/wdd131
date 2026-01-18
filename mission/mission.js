
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.classList.add('dark');
        document.getElementById('content').style.borderColor = 'white';
        logo.src = 'byui-logo-white.png';
    } else {
        document.body.classList.remove('dark');
        document.getElementById('content').style.borderColor = 'black';
        logo.src = 'byui-logo-blue.webp';
    }
}           
                    