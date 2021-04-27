let currentAnimationTime = 0;

function runAnimate() {
    // цвета переведённые в rgb из hex
    // 196,196,196 - gray
    // 222,152,131 - color
    // =26 =44 =65
    
    let squares = document.querySelectorAll('.rect')
    currentAnimationTime += 0.09;
    
    // amplitude = разница в значениях между верхней и нижней границей перехода цветов
    const amplitude1 = 26;
    const amplitude2 = 44;
    const amplitude3 = 65;
    
    const startColor = 196
    
    let count1 = 0
    let count2 = 0
    let count3 = 0
    
    squares.forEach((item, index) => {
        count1 = startColor + Math.trunc(Math.sin(currentAnimationTime - index) * amplitude1)
        count2 = startColor - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude2)
        count3 = startColor - Math.trunc(Math.sin(currentAnimationTime - index) * amplitude3)
    
        item.style.backgroundColor = `rgb(
            ${ (count1 <= startColor) ? startColor : count1 },
            ${ (count2 >= startColor) ? startColor : count2 },
            ${ (count3 >= startColor) ? startColor : count3 }
           )`
    })
    
    requestAnimationFrame(runAnimate);
}

runAnimate();
