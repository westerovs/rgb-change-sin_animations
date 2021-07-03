// Плавная смена цвета.
// Принимает два rgb на вход
// опционально альфаканал
let squares = document.querySelectorAll('.rect')

const getDifColor = (firstColor = [], secondColor = []) => {
    if (firstColor.length === 3 && secondColor.length === 3) {
        return {
            startColor: firstColor,
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

const startColor = rgbDif.startColor

const result = {
    r: 0,
    g: 0,
    b: 0,
}

let currentAnimationTime = 0;

function convertColors() {
    currentAnimationTime += 0.03;
    
    // amplitude = разница в значениях между верхней и нижней границей перехода цветов
    squares.forEach((item, index) => {
        result.r = startColor[0] + Math.trunc(Math.sin(currentAnimationTime - index) * amplitude1)
        result.g = startColor[1] - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude2)
        result.b = startColor[2] - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude3)
    
        item.style.backgroundColor = `rgb(
            ${ (result.r <= startColor[0]) ? startColor[0] : result.r },
            ${ (result.g >= startColor[1]) ? startColor[1] : result.g },
            ${ (result.b >= startColor[2]) ? startColor[2] : result.b }
           )`
    })
    
    requestAnimationFrame(convertColors);
}

convertColors();
