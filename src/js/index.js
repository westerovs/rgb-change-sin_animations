// цвета переведённые в rgb из hex
// Пример
// 196,196,196 - gray
// 222,152,131 - color
// =26 =44 =65
let squares = document.querySelectorAll('.rect')

const getDifColor = (firstColor = [], secondColor = []) => {
    if (firstColor.length === 3 && secondColor.length === 3) {
        return {
            difR: (firstColor[0] > secondColor[0]) ? firstColor[0] - secondColor[0]  : secondColor[0] - firstColor[0],
            difG: (firstColor[1] > secondColor[1]) ? firstColor[1] - secondColor[1]  : secondColor[1] - firstColor[1],
            difB: (firstColor[2] > secondColor[2]) ? firstColor[2] - secondColor[2]  : secondColor[2] - firstColor[2],
        }
    }
    
    console.log('некорректный ввод')
}

const rgbDif = getDifColor([0,255,169], [255,221,0])

console.log(rgbDif)

const amplitude1 = rgbDif.difR;
const amplitude2 = rgbDif.difG;
const amplitude3 = rgbDif.difB;

const startColor = [0,255,169]

let count1 = 0
let count2 = 0
let count3 = 0

let currentAnimationTime = 0;

function convertColors() {
    currentAnimationTime += 0.009;
    
    // amplitude = разница в значениях между верхней и нижней границей перехода цветов
    squares.forEach((item, index) => {
        count1 = startColor[0] + Math.trunc(Math.sin(currentAnimationTime - index) * amplitude1)
        count2 = startColor[1] - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude2)
        count3 = startColor[2] - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude3)
    
        item.style.backgroundColor = `rgb(
            ${ (count1 <= startColor[0]) ? startColor[0] : count1 },
            ${ (count2 >= startColor[1]) ? startColor[1] : count2 },
            ${ (count3 >= startColor[2]) ? startColor[2] : count3 }
           )`
    })
    
    requestAnimationFrame(convertColors);
}

convertColors();
