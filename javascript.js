// Yo again

function recipeTemplate(card) {
    return `
    <div class="artCard">
        <img src="${card.imgSrc}" class="previewImage" loading="lazy" alt="${card.title}">
        <div class="artCardInfo">
            <h1>${card.title}</h1>
            <p>${card.description}</p>
        </div>
    </div>
    `
}

function projectTemplate(card) {
    return `
    <div class="artCard">
        <img src="${card.imgSrc}" class="previewImage" alt="${card.alt}" loading="lazy">
        <div class="artCardInfo">
            <h1>${card.title}</h1>
            <p>${card.description}</p>
            <a href="${card.siteLink}"><button class="linkButton">${card.linkText}</button></a>
        </div>
    </div>
    `
}

function renderCard(card) {
    let html = recipeTemplate(card);
    artColumn.innerHTML += html;
}

function renderProjectCard(card) {
    let html = projectTemplate(card);
    projectColumn.innerHTML += html;
}

const artCards = [
    {
        title: "Land of Darkness",
        imgSrc: "images/landofdarkness-v1-sm.jpg",
        description: "Pajama Sam was a point and click adventure game for young children with a goal of helping them to overcome their fears. The first entry in the series was all about overcoming fear of darkness, represented by a sentient being. This is a drawing based off of the outside of Darkness's House.",
        alt: "Darkness's House from Pajama Sam"
    },
    {
        title: "The Legend",
        imgSrc: "images/theLegend-v2-sm.jpg",
        description: "From the videogame Deltarune, there is a story told to the player at the beginning of the game, called 'The Legend'. This story is a prophecy that fortells the main character's appearance and roles as heros in saving the world they are from, as well as the worlds the find themselves falling into. The three heroes are foretold to be a human, a monster, and a prince from the dark.",
        alt: "The 3 Heroes of Legend from Deltarune"
    },
    {
        title: "Cactus",
        imgSrc: "images/cactus-sm.jpg",
        description: "Sometimes, you'll get a homework assignment that requires you to upload a file. Sometimes, you'll get a homework assignment that doesn't require a file upload, but asks for one anyway. In those cases where you have nothing to submit, submit the cactus.",
        alt: "A simple cactus with a smiling face standing in a desert"
    }
]; 

const projectCards = [
    {
        title: "Testimony Clicker",
        imgSrc: "images/testimonyClickerPreview.jpeg",
        description: "A simple idle game created with the challenge of running on a heavily locked down phone, all constructed in a single html file. (apparantly it was impressive enough to land me an interview for a web development internship, just saying)",
        siteLink: "https://bre21020.github.io/wdd131/Testimony%20Clicker%202.8.html",
        linkText: "PLAY NOW",
        alt: "Book of Mormon"
    },
    {
        title: "Recipes",
        imgSrc: "images/recipe-book.png",
        description: "A simple project made for my web development class with a cooking theme that focuses on creating html elements dynamically as well as implementing a sorting feature to find recipes based on certain criteria.",
        siteLink: "https://bre21020.github.io/wdd131/recipes2/index.html",
        linkText: "VISIT",
        alt: "Logo for recipe site"
    },
    {
        title: "More on my GitHub",
        imgSrc: "images/Octicons-mark-github.svg.png",
        description: "Admitedly, there arent that many projects I have that really stand out. But there are a lot of simple homework assignments that I have done for my web development class that you can find on my GitHub if you are intersted!",
        siteLink: "https://bre21020.github.io/wdd131/recipes2/index.html",
        linkText: "VISIT",
        alt: "Github Logo"
    }
];


//const gallery = document.querySelector('.artCard');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const artColumn = document.querySelector('.artColumn');
const projectColumn = document.querySelector('.projectColumn');

const button = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");


artCards.forEach(card => renderCard(card));
projectCards.forEach(card => renderProjectCard(card));

const images = document.querySelectorAll('.artColumn .previewImage');
images.forEach(img => img.addEventListener('click', openModal));

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;

    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
    closeButton.focus();
    
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

document.addEventListener("keydown", logKey);

function logKey(e) {
    if (e === 'Escape') {
        modal.close();
    }
}