/*
* Принимает два любых rgb на вход.
* Получает разницу между цветами и плавно меняет цвет от первого RGB до второго
*/

const getRgbDifference = (firstRgb, secondRgb) => {
  if (firstRgb.length === 3 && secondRgb.length === 3) {
    return {
      // получаем разницу в значениях между верхней и нижней границей перехода цветов
      r: (firstRgb[0] > secondRgb[0]) ? firstRgb[0] - secondRgb[0] : secondRgb[0] - firstRgb[0],
      g: (firstRgb[1] > secondRgb[1]) ? firstRgb[1] - secondRgb[1] : secondRgb[1] - firstRgb[1],
      b: (firstRgb[2] > secondRgb[2]) ? firstRgb[2] - secondRgb[2] : secondRgb[2] - firstRgb[2],
    }
  }
}

const getRandomNumber = (min = 0, max) => (Math.random() * (max - min) + min).toFixed(0)

const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

export {
  getRgbDifference,
  getRandomNumber,
  render,
}
