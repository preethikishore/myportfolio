

const prjOne = document.querySelector('.imgOne');
const prjTwo = document.querySelector('.imgTwo');
const prjThree = document.querySelector('.imgThree');
const prjFour = document.querySelector('.imgFour');
const prjFive = document.querySelector('.imgFive');
const dribble = document.querySelector('.dribble');

document.getElementById('androidOne').onclick = function(){
    window.open("https://play.google.com/store/apps/details?id=com.preethikishore.roar_animal_dino_sounds", "_blank");
}

document.getElementById('androidTwo').onclick = function(){
    window.open("https://play.google.com/store/apps/details?id=com.allureinfosystems.emi_calculator", "_blank");
}
document.getElementById('androidThree').onclick = function(){
    window.open("https://github.com/preethikishore/Covid19India", "_blank");
}

prjOne.addEventListener('click' , event =>{
    window.open("https://preethikishore.github.io/LetsTravel/", "_blank");
})

prjTwo.addEventListener('click' , event =>{
    window.open("https://preethikishore.github.io/tinDog/", "_blank");
})

prjFour.addEventListener('click' , event => {
    window.open("https://preethikishore.github.io/ExoticCar/", "_blank");
})
prjFive.addEventListener('click' , event => {
    window.open("https://preethikishore.github.io/clockCounter/", "_blank");
})


