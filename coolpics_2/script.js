// Yo again

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

const button = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);

    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const input = document.querySelector(".gallery");

input.addEventListener("keydown", logKey);

function logKey(e) {
    //console.log(e.code);
    if (e === 'Escape') {
        modal.close();
    }
}


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
        nav.classList.add('nav_menu');
        button.classList.add('change'); 
    } else {
        nav.classList.add('hide');
        nav.classList.remove('nav_menu');
        button.classList.remove('change');
    }
    console.log(nav.classList);
    console.log(button.classList);
}

menu_adjuster();