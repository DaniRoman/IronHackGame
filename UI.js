export class UI {
    constructor(game){
        this.game = game
        this.fontSize = 30
        this.fontFamily = 'Creepster'
        this.livesImage = document.getElementById('heart')
        this.width = 100
        this.height = 40
        this.maxFrame = 9
        this.frameX = 0
        this.frameY = 0
        this.fps = 20
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
    }
    draw(context){
     
        context.font = this.fontSize + 'px ' + this.fontFamily
        context.textAlign = 'left'
        context.fillStyle = this.game.fontColor
        //Score
        context.fillText('Score:' + this.game.score, 35, 40)
        //Lives
        for(let i= 0; i < this.game.lives;i++){
            context.drawImage(this.livesImage, this.frameX * this.width, 0, this.width, this.height, 20 * i * 2  ,50, this.width, this.height)
        }
        //GAmeOver
        /*if (this.game.gameOver){
            context.textAlign = 'center'
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily
            context.fillText('Game Over Pillastre', this.game.width * 0.5, this.game.height * 0.5 + 20)
        }*/
    }

    drawOver(context){  
        console.log('context',context) 
        context.textAlign = 'center'
        context.font = this.fontSize * 4 + 'px ' + this.fontFamily
        context.fillText('Game Over', this.game.width * 0.5, this.game.height * 0.5 + 20)
        }
        
    update(deltaTime){
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX ++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }
        
    }
}