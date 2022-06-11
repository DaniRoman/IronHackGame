//import { Attacking } from "./playerStates.js" 
import { Running } from "./playerStates.js"
import { Sitting } from "./playerStates.js";
export class Player {

    constructor(game){
        this.game = game;
        this.width = 110;
        this.height = 114;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.weight = 1
        this.vy = 0
        this.image = document.getElementById('playerId')
        this.frameX = 0
        this.frameY = 0
        this.speed = 0;
        this.maxSpeed = 5;
        this.states = [ new Sitting(),new Running(this)]
        this.currentState = this.states[0]
        this.currentState.enter()
    }

    update(input){
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

    }

    draw(context){ 
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height,  this.x, this.y, this.width, this.height )
        
       
    }

    onGround(){
        return this.y >= this.game.height - this.height

    }

    setState(state){
        this.currentState = this.states[state]
        this.currentState.enter()
    }
}