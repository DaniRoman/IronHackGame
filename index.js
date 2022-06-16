import { Game } from './game.js'

/**Inicio juego */
    const canvas = document.querySelector("#canvas1");
    /**Logicas 2d */
    const ctx = canvas.getContext("2d");
    
    canvas.width = 630
    canvas.height = 500

    const game = new Game(canvas.width, canvas.height)
    let lastTime = 0
    /**Animation loop esto hara que se inicie el juego y se refrsque 60fps*/
    window.addEventListener("load",()=>{canvas.classList.add("hidden")})
    
    let gameStart = false

    document.getElementById("boton")
    .addEventListener('click',()=>{
        console.log(gameStart)
        gameStart=!gameStart
        if(gameStart){
            game.music.play()
        }else game.music.pause()
        console.log(gameStart)
        canvas.classList.toggle("hidden")
        document.querySelector("#container").classList.toggle("container2")
        //document.querySelector("#container").classList.add("container2")
    })


    document.getElementById("botonRes")
    .addEventListener('click',()=>{
        if(game.gameOver){
            game.gameOver = false
            game.lives = 3
            animate(0)
        }
    })
    
    
 
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.draw(ctx)
        game.update(deltaTime)
        game.checkEnd(ctx)
        if(!game.gameOver) requestAnimationFrame(animate)
    }

    animate(0)
