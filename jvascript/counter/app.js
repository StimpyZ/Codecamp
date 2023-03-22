let count = 0;


const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')


btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        
        const state = e.currentTarget.classList

        if (state.contains('increase')) {
            count++;

        } else if (state.contains('decrease')) {
            count--;

        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';

        } else if (count < 0) {
            value.style.color = 'red'

        } else {
            value.style.color = 'purple'
        }

        value.textContent = count;
    })
})