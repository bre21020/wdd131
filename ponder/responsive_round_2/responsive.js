let button = document.querySelector("button")
let nav = document.querySelector("nav");

button.addEventListener('click', toggle_menu);

//did this myself
function menu_adjuster () {
    if (window.innerWidth >= 700) {
        nav.classList.remove('hide');
        console.log('hide class removed')
    } else {
        nav.classList.add('hide');
        console.log('hide class added')
    }
}

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

menu_adjuster();