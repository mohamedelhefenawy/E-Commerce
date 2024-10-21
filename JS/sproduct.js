const photos = document.querySelectorAll('.small img');
const mainImage = document.querySelector('.main-img');

console.log(photos)

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        const tempSrc = mainImage.src; 
        mainImage.src = photo.src;     
        photo.src = tempSrc;           
    });
});

const bar = document.querySelector('.fas.fa-outdent')
const navbar = document.querySelector('.navbar')
const closed = document.querySelector('.close')



if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
    closed.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}