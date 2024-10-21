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





function showpage(page){
    const page_1 = document.querySelector('.page1')
    const page_2 = document.querySelector('.page2')

    if (page === 1){
        page_1.style.display = 'block'
        page_2.style.display='none'
        window.scrollTo(0,0)

    }else if(page === 2){

        page_1.style.display='none'
        page_2.style.display='block'
        window.scrollTo(0,0)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showpage(1); 
});
