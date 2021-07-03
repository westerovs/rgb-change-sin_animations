/*
* Принимает два любых rgb на вход.
*  Получает разницу между цветами и плавно меняет цвет от первого RGB до второго
* В идеале, обернуть это в класс и добавить альфаканал ещё
*/
const boxSide = document.querySelectorAll('.slider__side')

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

const rgbDif = getDifColor([1, 3, 5], [250, 35, 38])

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

// играя с этим числом, можно получить интересные эффекты(2, 5, 6 и тд)
const typeAnimation = 6

let currentAnimationTime = 0;
let animationSquare = null
let alpha = false

// временный костыль. Добавлю async
setTimeout(() => {
    const squares = document.querySelectorAll('.rect')
    
    function initConvertColors() {
        currentAnimationTime += 0.007;
        
        squares.forEach((item, i) => {
            result.r = startColor[0] + Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.r)
            result.g = startColor[1] - Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.g)
            result.b = startColor[2] - Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.b)
            
            item.style.backgroundColor = `rgb(
                ${ (result.r <= startColor[0]) ? startColor[0] : result.r },
                ${ (result.g >= startColor[1]) ? startColor[1] : result.g },
                ${ (result.b >= startColor[2]) ? startColor[2] : result.b },
                ${ alpha ? +Math.abs(Math.sin(+i)).toFixed(1) : 1 }
            )`
        })
        
        animationSquare = requestAnimationFrame(initConvertColors);
    }
    
    initConvertColors();
}, 1000)


// ----------- render
const render = (container, template, place = 'beforeend') => {
    if (container instanceof Element) {
        container.insertAdjacentHTML(place, template)
    }
}

for (const side of boxSide) {
    for (let i = 1; i < 50; i++) {
        render(side, '<div class="rect"></div>')
    }
}


