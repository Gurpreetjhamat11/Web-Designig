const ques5 = document.getElementById('openModal');
const ques6 = document.getElementById('light');

const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal-window');
const light = document.querySelector('.lightBox')
const pics = document.querySelector('.pics')
const img = document.querySelector('.img')


ques5.addEventListener('click', ()=>{
    modal.style.display = 'block';
})
ques6.addEventListener('click', ()=>{
    light.style.display = 'block';
})

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
    light.style.display = 'none';

})


const changeImg = (e)=>{
    img.src = e.target.src
}

pics.querySelectorAll(img).forEach(img => img.addEventListener('click', changeImg));