let button = document.querySelector("button")
let nav = document.querySelector("nav");

button.addEventListener('click', toggle_menu);

function toggle_menu() {
    if (nav.classList == 'hide') {
        nav.classList.remove('hide');
        button.classList.add('change'); 
    } else {
        nav.classList.add('hide');
        button.classList.remove('change');
    }
    console.log(nav.classList);
    console.log(button.classList);
}
