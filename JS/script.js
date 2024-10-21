const bar = document.querySelector('.fas.fa-outdent')
const navbar = document.querySelector('.navbar')
const closed = document.querySelector('.close')

const photos = document.querySelector('.small img');


const images = document.querySelectorAll('.pro-shirt img');


console.log(images)
if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
    closed.addEventListener('click',()=>{
        navbar.classList.remove('active');
    })
}

// images change in sproduct

console.log(photos)





// 

