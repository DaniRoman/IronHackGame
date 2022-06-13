import { Player } from './player.js'
import { InputHandler } from "./input.js"
import { Background} from "./background.js" 
import { FlyingEnemy, GroundEnemy} from "./enemies.js"
import { UI } from "./UI.js"
/**Inicio juego */
window.addEventListener("load", function(){

    const canvas = document.querySelector("#canvas1");
    /**Logicas 2d */
    const ctx = canvas.getContext("2d");
    
    canvas.width = 600
    canvas.height = 500

    //Clase juego donde paso lo parámetro de este e inicializare los objetos dentro de este
    class Game{

        constructor(width, height){
            //Aqui cargo lo que contendra el juego (incluidos los personajes)
            this.width = width
            this.height = height
            this.groundMargin = 42
            this.speed = 0
            this.maxSpeed = 3
            this.player = new Player(this)
            this.input = new InputHandler(this)
            this.UI = new UI(this)
            this.backGround = new Background(this)
            this.enemies = []
            this.enemyTimer = 0
            this.enemyInterval = 3000
            this.debug = true
            this.score = 0
            this.fontColor = 'black'
        }

        //Metódo donde hare update de todos los objetos del juego
        update(deltaTime){
            this.backGround.update()
            this.player.update(this.input.keys, deltaTime)
            /**Display enemies */
            if(this.enemyTimer > this.enemyInterval){
                this.addEnemy()
                this.enemyTimer = 0
            }else {
                this.enemyTimer += deltaTime
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime)
                if(enemy.markedForDeletion)this.enemies.splice(this.enemies.indexOf(enemy),1)
                
            })
        }

        //Método donde pintar todos lo objetos del juego
        draw(context){
            this.backGround.draw(context)
            this.player.draw(context)
            this.enemies.forEach(enemy => enemy.draw(context))
            this.UI.draw(context)
        }
        addEnemy(){
            if(this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this))
            this.enemies.push(new FlyingEnemy(this))
            console.log(this.enemies)
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