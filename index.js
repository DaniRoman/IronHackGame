import { Player } from './player.js'
import { InputHandler} from "./input.js"
/**Inicio juego */
window.addEventListener("load", function(){

    const canvas = document.querySelector("#canvas1");
    /**Logicas 2d */
    const ctx = canvas.getContext("2d");
    
    canvas.width = 800
    canvas.height = 600

    //Clase juego donde paso lo parámetro de este e inicializare los objetos dentro de este
    class Game{

        constructor(width, height){
            //Aqui cargo lo que contendra el juego (incluidos los personajes)
            this.width = width
            this.height = height
            this.player = new Player(this)
            this.input = new InputHandler()
        }

        //Metódo donde hare update de todos los objetos del juego
        update(deltaTime){
            this.player.update(this.input.keys, deltaTime)
        }

        //Método donde pintar todos lo objetos del juego
        draw(context){
          this.player.draw(context)
        }

    }
    const game = new Game(canvas.width, canvas.height)
    let lastTime = 0

    
    /**Animation loop esto hara que se inicie el juego y se refrsque 60fps*/
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.draw(ctx)
        game.update(deltaTime)
        requestAnimationFrame(animate)
    }

    animate(0)
});