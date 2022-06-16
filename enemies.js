class Enemy{

    constructor(){
        this.haveColision = false
        this.frameX = 0
        this.frameY = 0
        this.fps = 20
        this.frameInterval = 1000/this.fps
        this.frameTimer = 0
        this.markedForDeletion = false
    }
    
    update(deltaTime){
        this.x -= this.speedX + this.game.speed
        this.y += this.speedY
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0
            if(this.frameX < this.maxFrame) this.frameX ++
            else this.frameX = 0
        }else{
            this.frameTimer += deltaTime
        }

        if(this.x + this.width < 0) this.markedForDeletion = true
    }

    deatSound(){
        let flingSource = document.getElementById("flyEnemyHit") 
        let gostSource = document.getElementById("ghostEnemyHit")
        
        if(this.type==="flying") flingSource.play()
        else if(this.type==="ghost") gostSource.play()
    }

}

export class FlyingEnemy extends Enemy{
    constructor(game){
        super()
        this.game = game
        this.width = 100
        this.height = 100
        this.x = this.game.width + Math.random() * this.game.width * 0.5
        this.y = Math.random() * (this.game.height + 100) * 0.5
        this.speedX = Math.random() + 1
        this.speedY = 0
        this.frameY = 0 
        this.frameX = 0
        this.maxFrame = 5
        this.image = document.getElementById("enemy_fly")
        this.angle = 0
        this.va = Math.random() * - 0.1 + 0.1
        this.flyDeathSound = document.getElementById("flyEnemyHit")
        this.type = "flying"
    }

    draw(context){
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    update(deltaTime){
        super.update(deltaTime)
        this.angle += this.va
        this.y += Math.sin(this.angle)
    }

    enemyState(){
        this.maxFrame = 6
        this.frameY = 1
        setTimeout(()=>{
           this.markedForDeletion = true
        },600)
    }
}

export class GroundEnemy extends Enemy{
    constructor(game){
        super()
        
        this.game = game
        this.width = 100
        this.height = 100
        this.frameY = 1
        this.x = this.game.width
        this.y = this.game.height - this.game.groundMargin - this.height
        this.speedX = Math.random() + 1
        this.speedY = 0
        this.maxFrame = 6
        this.image = document.getElementById("enemy_ghost")
        this.ghostDeathSound = document.getElementById("ghostEnemyHit")
        this.type = "ghost"
    }

    update(deltaTime){
        super.update(deltaTime)
        
        
    }
    
    draw(context){
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    enemyState(){
        this.frameY = 3
        setTimeout(()=>{
           this.markedForDeletion = true
        },500)
    }
}

export class FlyingSkull extends Enemy{
    constructor(game){
        super()
        this.game = game
        this.width = 96
        this.height = 112
        this.x = this.game.width + Math.random() * this.game.width * 0.5
        this.y = Math.random() * (this.game.height + 100) * 0.5
        this.speedX = Math.random() + 1
        this.speedY = 0
        this.frameY = 0 
        this.frameX = 0
        this.maxFrame = 7
        this.image = document.getElementById("flySkull")
        this.angle = 0
        this.va = Math.random() * - 0.1 + 0.1
        this.flyDeathSound = document.getElementById("flyEnemyHit")
        this.type = "flying"
    }

    draw(context){
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    update(deltaTime){
        super.update(deltaTime)
        this.angle += this.va
        this.y += Math.sin(this.angle)
    }

    enemyState(){
        this.maxFrame = 6
        this.frameY = 1
        setTimeout(()=>{
           this.markedForDeletion = true
        },600)
    }    
}

export class Demon extends Enemy{
    constructor(game){
        super()
        
        this.game = game
        this.width = 240
        this.height = 192
        this.frameY = 0
        this.x = this.game.width
        this.y = this.game.height - this.game.groundMargin - this.height
        this.speedX = Math.random() + 1
        this.speedY = 0
        this.maxFrame = 10
        this.image = document.getElementById("demon")
        this.ghostDeathSound = document.getElementById("ghostEnemyHit")
        this.type = "ghost"
    }

    update(deltaTime){
        super.update(deltaTime)     
    }
    
    draw(context){
        if(this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    enemyState(){
        this.frameY = 3
        setTimeout(()=>{
           this.markedForDeletion = true
        },500)
    }
}

