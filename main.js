// =============Beknazar Oltiboyev==============
let left = document.querySelector('.left')
let right = document.querySelector('.right')
const product = document.querySelectorAll('.slider .product')

let counter = 0

function Left(){
    if(counter == 0){
        counter = product.length / 3 - 1
    }else{
        counter--
    }
    scroll()
}

function Right(){
    if(counter == product.length / 3 - 1){
        counter = 0
    }else{
        counter++
    }
    scroll()
}

function scroll(){
    product.forEach((item)=>{
        item.style.transform = `translateX(-${counter * 1000}px)`
    })
}


left.addEventListener('click', Left)
right.addEventListener('click', Right)