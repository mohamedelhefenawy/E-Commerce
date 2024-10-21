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


const readall = document.querySelectorAll('.read a')
const grey_span = document.querySelectorAll('h2 span')
console.log(grey_span)

console.log(readall)

function spanned() {
    for (let i = 0; i < readall.length; i++) {
        readall[i].addEventListener('click', function() {
            // Toggle display property between 'block' and 'none'
            if (grey_span[i].style.display === 'block') {
                grey_span[i].style.display = 'none';
                readall[i].classList.remove('hover-enabled'); // Remove hover effect
            } else {
                grey_span[i].style.display = 'block';
                readall[i].classList.add('hover-enabled'); // Add hover effect
            }
        });
    }
}
spanned()

