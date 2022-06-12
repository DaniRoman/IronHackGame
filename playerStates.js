const states = {
    STANDING:0,
    SITTING:1,
    RUNNING: 2,
    JUMPING: 3,
    ATTACKING:4,
}

class State{
    constructor(state){
        this.state = state
    }
}
export class Standing extends State{
    
    constructor(player){
        super('STANDING')
        this.player = player
    }
    enter(){
        this.player.frameX = 0
        this.player.maxFrame = 3
        this.player.frameY = 0;
    }

    handleInput(input){
        
        if(input.includes('ArrowRight') || input.includes('ArrowLeft')){
            this.player.setState(states.RUNNING, 1)
        }
        else if(input.includes('ArrowDown'))this.player.setState(states. SITTING, 0)
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING, 1)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING, 0)
    }
}
export class Sitting extends State{
    
    constructor(player){
        super('SITTING')
        this.player = player
    }
    enter(){
        this.player.frameX = 0
        this.player.maxFrame = 6
        this.player.frameY = 6;
    }

    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING, 0)
        else if(input.includes('ArrowRight') || input.includes('ArrowLeft')){
            this.player.setState(states.RUNNING, 1)
        }
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING, 1)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING, 0)
    }
}

export class Running extends State{
    
    constructor(player){
        super('RUNING')
        this.player = player
    }

    enter(){
        this.player.frameX = 0
        this.player.maxFrame = 5
        this.player.frameY = 1;
    }
    
    handleInput(input){
        if(input.length === 0  && this.player.onGround()){this.player.setState(states.SITTING, 0)
        }
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING, 1)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING, 1.2)
    }
}

export class Jumping extends State{
    
    constructor(player){
        super('JUMPING')
        this.player = player
    }

    enter(){
        this.player.frameX = 0
        this.player.maxFrame = 9
        this.player.frameY = 2;
    }
    
    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING, 0)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING, 1.2)
    }
}

  export class Attacking extends State{
    
    constructor(player){
        super('ATTACKING')
        this.player = player
    }
    enter(){
        this.player.frameX = 0
        this.player.maxFrame = 9
        this.player.frameY = 4;
    }

    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING, 0)
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING, 1)
        
    }
}
 
 