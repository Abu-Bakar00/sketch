const root = document.querySelector('#root')

const container = document.createElement('div')
container.classList.add('container')
const sizeBtn = document.createElement('button')
sizeBtn.classList.add('btn')
sizeBtn.textContent = 'Size'

const modeBtn = document.createElement('button')
modeBtn.classList.add('btn')
modeBtn.textContent = 'Mode'

root.append(container, sizeBtn, modeBtn)

let modeFlag = 'rgb'

function getRgbNum(){
    return Math.floor(Math.random() * 255)
}

function getRandomColor(){
    return `rgb(${getRgbNum()}, ${getRgbNum()},${getRgbNum()})`
}

function addCells(num){
    container.textContent = ""
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`

    for(let i = 0; i < num * num; i++) {
        const cell = document.createElement('div')

        cell.style.border = '1px solid'

        let opacity = 0;

        cell.addEventListener('mouseenter', () => {
            if(modeFlag === 'rgb'){
              cell.style.backgroundColor = getRandomColor()
            }else{
                opacity++

                cell.style.backgroundColor = '#000000';
                cell.style.opacity = '0' + opacity
            }

        })

        container.append(cell)
    }
}
sizeBtn.addEventListener('click', () => {
    const size = prompt('введите число')

    if(isNaN(size)){
        alert ('so, where is your numbers?')
        return
    }

    if(size > 100) {
        alert('too many cells')
        return 
    }

    addCells(+size)
})

modeBtn.addEventListener('click', () => {
    if(modeFlag === 'rbg') {
        modeFlag = 'opacity'
    } else {
        modeFlag = 'rgb'
    }
})

addCells(10)