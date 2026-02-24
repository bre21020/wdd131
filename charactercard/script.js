const characterCard = {
    name: 'Thing',
    class: 'Smile',
    health: 80,
    level: 2,

    attacked: function () {
        if (this.health > 0) {
            this.health -= 20;
            document.querySelector('#IDhealth').innerHTML = this.health;
            console.log(this.health);
        } else {
            alert(this.name + " is dead.");
            location.reload();
        }
    },
    levelUp: function () {
        this.level ++;
        document.querySelector('#IDlevel').innerHTML = this.level;
        console.log(this.level);
    }
};

document.querySelector('#IDclass').innerHTML = characterCard.class;
document.querySelector('#IDname').innerHTML = characterCard.name;
document.querySelector('#IDhealth').innerHTML = characterCard.health;
document.querySelector('#IDlevel').innerHTML = characterCard.level;


document.querySelector("#IDattacked").addEventListener("click", function () {
    characterCard.attacked();
    console.log('Damaged');
});

document.querySelector("#IDlevelUp").addEventListener("click", function () {
    characterCard.levelUp();
    console.log('leveled up');
});