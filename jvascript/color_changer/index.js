const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "D", "F"];
const colorsPrimary = ["red", "green", "blue"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

btn.addEventListener('click', () => {

    let colorChanger = '#'

    for (let i = 0; i < 6; i++) {
        colorChanger+= hex[randomNum()]
    }
    document.body.style.backgroundColor = colorChanger
    console.log(colorChanger)

    color.textContent = colorChanger
})

btn2.addEventListener('click', () => {

    const colors = randomNum2()
    document.body.style.backgroundColor = colorsPrimary[colors]
    color.textContent = colorsPrimary[colors]
})


const randomNum2 = () => Math.floor(Math.random()* colorsPrimary.length)
console.log(randomNum2())

const randomNum = () => Math.floor(Math.random()* hex.length)
console.log(randomNum())
