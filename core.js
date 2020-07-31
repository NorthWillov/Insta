const ring = document.querySelector('#ring');
const doors = document.querySelector('#doors');
const h2 = document.querySelector('h2');
const dogge = document.querySelector('#dogge');
const choose= document.querySelector('.choose');
const piwo= document.querySelector('#piwo');
const dollars= document.querySelector('#dollars');
const desert= document.querySelector('#desert');
const v1= document.querySelector('.v1');
const v2= document.querySelector('.v2');
const v3= document.querySelector('.v3');

ring.addEventListener('click', () => {
    doors.classList.add('none');
    ring.classList.add('none');
    h2.innerText = 'Кто там?';
    dogge.classList.remove('none');
    choose.classList.remove('none');
});

v1.addEventListener('click', () => {
    h2.innerText = 'Пиво за твой счет!!! xD';
    dogge.classList.add('none');
    choose.classList.add('none'); 
    piwo.classList.remove('none'); 
});
v2.addEventListener('click', () => {
    h2.innerText = 'Нету :((( Зайди попозже';
    dogge.classList.add('none');
    choose.classList.add('none'); 
    dollars.classList.remove('none'); 
});
v3.addEventListener('click', () => {
    h2.innerText = 'Артем был в сети 15 мин назад';
    dogge.classList.add('none');
    choose.classList.add('none'); 
    desert.classList.remove('none'); 
});

