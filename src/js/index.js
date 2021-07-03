/*
* Принимает два любых rgb на вход.
*  Получает разницу между цветами и плавно меняет цвет от первого RGB до второго
* В идеале, обернуть это в класс и добавить альфаканал ещё
*/
let squares = document.querySelectorAll('.rect')

const getDifColor = (firstRgb , secondRgb) => {
    if (firstRgb.length === 3 && secondRgb.length === 3) {
        return {
            startColor: firstRgb,
            // получаем разницу в значениях между верхней и нижней границей перехода цветов
            difR: (firstRgb[0] > secondRgb[0]) ? firstRgb[0] - secondRgb[0] : secondRgb[0] - firstRgb[0],
            difG: (firstRgb[1] > secondRgb[1]) ? firstRgb[1] - secondRgb[1] : secondRgb[1] - firstRgb[1],
            difB: (firstRgb[2] > secondRgb[2]) ? firstRgb[2] - secondRgb[2] : secondRgb[2] - firstRgb[2],
        }
    }
    console.log('некорректный ввод')
}

const rgbDif = getDifColor([0, 255, 169], [255, 5, 38])

const startColor = rgbDif.startColor
const amplitude = {
    r: rgbDif.difR,
    g: rgbDif.difG,
    b: rgbDif.difB,
}
const result = {
    r: 0,
    g: 0,
    b: 0,
}

// играя с этим числом, можно получить интересные эффекты
const typeAnimation = 5

let currentAnimationTime = 0;
let animationSquare = null

function initConvertColors() {
    currentAnimationTime += 0.005;
    
    squares.forEach((item, index) => {
        result.r = startColor[0] + Math.trunc(Math.sin(currentAnimationTime - index / typeAnimation) * amplitude.r)
        result.g = startColor[1] - Math.trunc(Math.sin(currentAnimationTime - index / typeAnimation) * amplitude.g)
        result.b = startColor[2] - Math.trunc(Math.sin(currentAnimationTime - index / typeAnimation) * amplitude.b)
    
        item.style.backgroundColor = `rgb(
            ${ (result.r <= startColor[0]) ? startColor[0] : result.r },
            ${ (result.g >= startColor[1]) ? startColor[1] : result.g },
            ${ (result.b >= startColor[2]) ? startColor[2] : result.b }
        )`
    })
    
    animationSquare = requestAnimationFrame(initConvertColors);
}

const destroyConvertColors = () => {
    currentAnimationTime = 0
    cancelAnimationFrame(animationSquare)
}

initConvertColors();

