//import { Attacking } from "./playerStates.js" 
import { Jumping, Standing, Running, Sitting, Attacking } from "./playerStates.js";
export class Player {

    constructor(game){
        this.game = game;
        this.width = 150;
        this.height = 110;
        this.x = 0;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.weight = 1
        this.vy = 0
        this.image = document.getElementById('playerId')
        this.frameX = 0
        this.frameY = 0
        this.maxFrame
        this.speed = 0;
        this.maxSpeed = 5;
        this.fps = 20
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
        this.states = [ new Standing(this), new Sitting(this),new Running(this), new Jumping(this), new Attacking(this)]
        this.currentState = this.states[0]
        this.currentState.enter()
    }

    update(input, deltaTime){
        this.checkCollision()
        this.currentState.handleInput(input)
        //Movimiento horizontal
        this.x += this.speed
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed
        else this.speed = 0
        if(this.x < 0) this.x = 0
        else if(this.x > this.game.width - this.width) this.x = this.game.width - this.width
        //movimiento vertical
        
        if(input.includes('ArrowUp') && this.onGround()) this.vy -= 20
        this.y += this.vy
        if(!this.onGround()) this.vy += this.weight
        else this.vy = 0

        //Animation
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }
        

    }

    draw(context){ 
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, 
            this.width, this.height,  this.x, this.y, this.width, this.height )
        
       
    }

    onGround(){
        return this.y >= this.game.height - this.height - this.game.groundMargin

    }

    setState(state, speed){
        this.currentState = this.states[state]
        this.currentState.enter()
        this.game.speed = this.game.maxSpeed * speed
    }

    checkCollision(){
        this.game.enemies.forEach(enemy => {
            if(
                enemy.x < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y
            ){
                enemy.markedForDeletion = true
                this.game.score ++
            }else{

            }
        })
    }
}