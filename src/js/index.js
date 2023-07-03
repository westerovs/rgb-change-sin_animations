import {getRgbDifference, getRandomNumber, render} from './utils.js'


// css transition animation
const animationRow = () => {
  const row = document.querySelector('.row')
  const rectangles = row.querySelectorAll('.rect')

  // get two random color
  const rgb1 = [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)]
  const rgb2 = [getRandomNumber(0, 255), getRandomNumber(0, 255), getRandomNumber(0, 255)]

  const maxItems = rectangles.length - 1
  const duration = '0.2s'
  let count = 0

  // on each transition loop, increase the counter and start animation
  const loopIteration = () => {
    const rgb = getRgbDifference(rgb1, rgb2)
    const currentRect = rectangles[count]

    currentRect.style.transition = `${duration} background-color, ${duration} margin`
    currentRect.style.backgroundColor = `rgb(${rgb.r}, ${rgb.b}, ${rgb.g})`
    currentRect.style.marginTop = '-10px'
    console.log(count, maxItems)

    // when the transition is complete, check the counter, and clear the styles
    const transitionEndHandler = () => {
      currentRect.removeEventListener('transitionend', transitionEndHandler)
      currentRect.style.marginTop = '0px'

      // if current rect is the last one, repeat the entire animation
      if (count >= maxItems) {
        console.log('END', count, maxItems)
        console.log(' ')
        animationRow()
        return
      }

      count++
      loopIteration()
    }

    currentRect.addEventListener('transitionend', transitionEndHandler)
  }
  loopIteration()
}

animationRow()


// const boxSide = document.querySelectorAll('.slider__side')

// console.log(getRgbDifference(rgb1, rgb2))
// const {r, g, b} = getRgbDifference(rgb1, rgb2)

// const rgbDif = getRgbDifference([1, 3, 5], [250, 35, 38])

// const startColor = rgbDif.startColor
// const amplitude = {
//   r: rgbDif.difR,
//   g: rgbDif.difG,
//   b: rgbDif.difB,
// }
// const result = {
//   r: 0,
//   g: 0,
//   b: 0,
// }

// играя с этим числом, можно получить интересные эффекты(2, 5, 6 и тд)
// const typeAnimation = 6

// let currentAnimationTime = 0;
// let animationSquare = null
// let alpha = false

// // временный костыль. Добавлю async позже !!!
// setTimeout(() => {
//     const squares = document.querySelectorAll('.rect')
//
//     function initConvertColors() {
//         currentAnimationTime += 0.05;
//
//         squares.forEach((item, i) => {
//             result.r = startColor[0] + Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.r)
//             result.g = startColor[1] - Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.g)
//             result.b = startColor[2] - Math.trunc(Math.sin(currentAnimationTime - (i * typeAnimation)) * amplitude.b)
//
//             item.style.backgroundColor = `rgb(
//                 ${ (result.r <= startColor[0]) ? startColor[0] : result.r },
//                 ${ (result.g >= startColor[1]) ? startColor[1] : result.g },
//                 ${ (result.b >= startColor[2]) ? startColor[2] : result.b },
//                 ${ alpha ? +Math.abs(Math.sin(+i)).toFixed(1) : 1 }
//             )`
//         })
//
//         animationSquare = requestAnimationFrame(initConvertColors);
//     }
//
//     initConvertColors();
// }, 1000)
//

// ----------- render

// for (const side of boxSide) {
//   for (let i = 1; i < 50; i++) {
//     render(side, '<div class="rect"></div>')
//   }
// }

