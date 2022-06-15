import { Game } from './game.js'

/**Inicio juego */
    const canvas = document.querySelector("#canvas1");
    /**Logicas 2d */
    const ctx = canvas.getContext("2d");
    
    canvas.width = 800
    canvas.height = 500

    const game = new Game(canvas.width, canvas.height)
    let lastTime = 0
    /**Animation loop esto hara que se inicie el juego y se refrsque 60fps*/
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
