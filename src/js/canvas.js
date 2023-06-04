import platform from "./../img/platform.png"
import hills from "./../img/Asset 8.png"
import background from "./../img/background.png"
import platformSmallTall from "./../img/platformSmallTall.png"
import correct from "./../img/answer 1.png"
import wrong from "./../img/answer_2.png"

import spriteRunLeft from "./../img/spriteRunLeft.png"
import spriteRunRight from "./../img/spriteRunRight.png"
import spriteStandLeft from "./../img/spriteStandLeft.png"
import spriteStandRight from "./../img/spriteStandRight.png"

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    reading = true
  };




const closeModal = function () {
    modal.classList.add("hidden");

    reading = false
    scrollOffset += 51
  };

// document.addEventListener("keydown", function (e) {
//     if (e.keyCode === 68 || 83 ||65 && !modal.classList.contains("hidden")) {
//         closeModal();
//     }
//   });
closeModalBtn.addEventListener("click", function (e) {
    if (!modal.classList.contains("hidden")) {
        closeModal();
    }
 });

   




const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 676


const gravity = 1

class Player {
    constructor() {
        this.speed = 7
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 66
        this.height = 150
        this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprites = {
            stand:{
                right:createImage(spriteStandRight),
                left:createImage(spriteStandLeft),
                cropWidth: 177,
                width: 66
            },
            run:{
                right:createImage(spriteRunRight),
                left:createImage(spriteRunLeft),
                cropWidth: 341,
                width: 127.875

            }
        }

        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
            400, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        )

    }

    update() {
        this.frames++
        if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)){
            this.frames = 0
        }
        else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right  || this.currentSprite === this.sprites.run.left)){
            this.frames = 0
        }
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if ( this.position.y + this.height + this.velocity.y <= canvas.height){ 
            this.velocity.y += gravity
        }
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y,
        }

        this.image = image
        this.width = image.width
        this.height = image.height

    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)

    }
}

class GenericObject {
  constructor({ x, y, image }) {
      this.position = {
          x,
          y,
      }

      this.image = image
      this.width = image.width
      this.height = image.height


  }

  draw(){
      c.drawImage(this.image, this.position.x, this.position.y)

  }
}

function createImage(imageSrc){
    const image = new Image()
    image.src = imageSrc
    return image
}

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)

let player = new Player()
let platforms = []
let genericObjects = []
let answers = []

let lastKey

let keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    },

}


let scrollOffset = 0
let reading = false

function init(){


    platformImage = createImage(platform)
    

    player = new Player()
    platforms = 
        [
            new Platform({
                x:platformImage.width * 6 + 200 - platformSmallTallImage.width - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 6 + 200 - 5 ,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 6  ,
                y:480,
                image:  createImage(correct)
            }),
            new Platform({
                x:platformImage.width * 6   ,
                y:280,
                image:  createImage(wrong)
            }),


            new Platform({
                x:platformImage.width * 10 + 200 - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 11 + 200 - platformSmallTallImage.width - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 11 + 200 - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 11 ,
                y:480,
                image:  createImage(correct)
            }),
            new Platform({
                x:platformImage.width * 11 ,
                y:280,
                image:  createImage(wrong)
            }),



            new Platform({
                x:platformImage.width * 20 - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 20  - platformSmallTallImage.width - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 20  + platformSmallTallImage.width - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 20 - 5,
                y:380,
                image:  platformSmallTallImage
            }),
            new Platform({
                x:platformImage.width * 20 ,
                y:480,
                image:  createImage(correct)
            }),
            new Platform({
                x:platformImage.width * 20 ,
                y:280,
                image:  createImage(wrong)
            }),


            new Platform({
                x:-5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width - 10 + 400,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 2 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 3 + 200 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 4 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 5 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 6 - 5,
                y:570,
                image: platformImage
            }),

            new Platform({
                x:platformImage.width * 7 + 300 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 8 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 9 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 10 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 11 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 12 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 13 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 14 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 15 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 16 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 17 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 18 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 19 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 20 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 21 + 400 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 22 + 250 - 5,
                y:570,
                image: platformImage
            }),
            new Platform({
                x:platformImage.width * 23 - 5,
                y:570,
                image: platformImage
            }),
        ]

    genericObjects = [
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),

    new GenericObject({
        x: -1,
        y: +25,
        image: createImage(hills)
    }),
    

    ]



    scrollOffset = 0
}

function animate() {
    console.log("reading", reading)
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0, canvas.width, canvas.height, )

    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })
    
    platforms.forEach(platform => {
      platform.draw()
    })
    player.update()
    if(reading == true){
        player.velocity.x = 0
        
    }else{

        if (keys.right.pressed && player.position.x < 400) {
            player.velocity.x = player.speed
        }
        else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
            player.velocity.x = -player.speed
        }
        else{
            player.velocity.x = 0

            if (keys.right.pressed) {
                scrollOffset += player.speed
                platforms.forEach(platform => {
                    platform.position.x -= player.speed

                })
                genericObjects.forEach(genericObject => {
                    genericObject.position.x -= player.speed * 0.66
                })
            }else if (keys.left.pressed && scrollOffset > 0) {
                scrollOffset -= player.speed
                platforms.forEach(platform => {
                    platform.position.x += player.speed

                })
                genericObjects.forEach(genericObject => {
                    genericObject.position.x += player.speed * 0.66
                })
            }
        }
    }

    



    // platform collision detection
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height +player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width ){
            player.velocity.y = 0    
        }
    })


    // sprite switch
    if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right){
        player.frames = 1
        player.currentSprite = player.sprites.run.right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left){
        
        player.currentSprite = player.sprites.run.left
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left){
        
        player.currentSprite = player.sprites.stand.left
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }
    else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right){
        
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }

    console.log(scrollOffset)
    // win condition
    if(scrollOffset > platformImage.width * 22  + 500){
        console.log("you win")
        init()
    }
    if(scrollOffset === 0 || scrollOffset > 1700 && scrollOffset < 1750 || scrollOffset > 4600 && scrollOffset < 4650 || scrollOffset > 6650 && scrollOffset < 6700 && reading == false){
        console.log("question")
        openModal()


    }
    if(scrollOffset > platformImage.width * 5 && scrollOffset < platformImage.width * 6 && reading == false){
        c.font = "30px Arial";
        c.fillText("Hello World", platformImage.width * 5, 200);
    }
    // lose condition
    if(player.position.y > canvas.height){
        init()
    }
}
init()
animate()

addEventListener('keydown', ({ keyCode }) => {
    switch(keyCode){
        case 65:
            keys.left.pressed = true
            lastKey = 'left'
            break

        case 83:
            break 

        case 68:
            keys.right.pressed = true
            lastKey = 'right'
            break

        case 87:
            player.velocity.y -= 25
            break 
    }
})


addEventListener('keyup', ({ keyCode }) => {
    switch(keyCode){
        case 65:
            keys.left.pressed = false

            break

        case 83:
            break 

        case 68:
            keys.right.pressed = false

            break

        case 87:
            
            break 
    }
})