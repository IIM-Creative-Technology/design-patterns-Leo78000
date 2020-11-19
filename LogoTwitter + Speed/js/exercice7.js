document.addEventListener('keydown', function (e){
   /* switch(e.code){
        case 'ArrowUp':
            imageManager.execute(e.code)
            break
        case 'ArrowLeft':
            imageManager.execute(e.code)
            break
        case 'ArrowRight':
            imageManager.execute(e.code)
            break
        case 'ArrowDown':
            imageManager.execute(e.code)
            break
    } */
    if (imageManager.hasOwnProperty(e.code)){
        imageManager.execute(e.code)
    }
})
changeUp.addEventListener('click', function() {
    imageManager.speed = imageManager.speed + 10;
});
changeDown.addEventListener('click', function() {
    imageManager.speed = imageManager.speed - 10;
});
stopSpeed.addEventListener('click', function() {
    imageManager.speed = 0;
});
let imageManager = {

    image: document.querySelector('.twitter-pic'),
    speed: parseInt(document.querySelector('#speed').value),

    ArrowUp: function(){
        console.log(this.speed)
        this.image.style.top = this.image.offsetTop - parseInt(this.speed) + 'px'
    },
    ArrowLeft: function(){
        this.image.style.left = this.image.offsetLeft - parseInt(this.speed) + 'px'
    },
    ArrowRight: function(){
        this.image.style.left = this.image.offsetLeft + parseInt(this.speed) + 'px'
    },
    ArrowDown: function(){
        this.image.style.top = this.image.offsetTop + parseInt(this.speed) + 'px'
    }

}


imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

const methods = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown']
let randomMethodKey, methodToExecute

setInterval(function () {
    //  add a random move
    randomMethodKey = Math.floor((Math.random() * 4))
    methodToExecute = methods[randomMethodKey]
    imageManager.execute(methodToExecute)
}, 500)


/* const getRandom = (min, max) => Math.floor(Math.random() * max) + min
const image = document.querySelector('.twitter-pic');
setInterval(() => {
    image.style.left= getRandom(0, 1000)+'px';
    image.style.top = getRandom(0, 1000)+'px';
}, 500); */