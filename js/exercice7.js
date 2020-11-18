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

let imageManager = {
    image: document.querySelector('.twitter-pic'),
    ArrowUp: function(){
        this.image.style.top = this.image.offsetTop - 10 + 'px'
    },
    ArrowLeft: function(){
        this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight: function(){
        this.image.style.left = this.image.offsetLeft + 10 + 'px'
    },
    ArrowDown: function(){
        this.image.style.top = this.image.offsetTop + 10 + 'px'
    }
}

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

const getRandom = (min, max) => Math.floor(Math.random() * max) + min
const image = document.querySelector('.twitter-pic');
setInterval(() => {
    image.style.left= getRandom(0, 300)+'px';
    image.style.top = getRandom(0, 300)+'px';
}, 500);