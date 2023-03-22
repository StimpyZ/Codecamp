const toggleBtn = document.querySelector('.sidebar-toggle')
const closeleBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


toggleBtn.addEventListener('click', () => {
    console.log(sidebar.classList)
    // if(sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar')

    // } else {
    //     sidebar.classList.add('show-sidebar')
    // }

    sidebar.classList.toggle('show-sidebar')
})

closeleBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})