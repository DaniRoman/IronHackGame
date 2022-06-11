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
        this.player.frameY = 0;
    }

    handleInput(input){
        
        if(input.includes('ArrowRight') || input.includes('ArrowLeft')){
            this.player.setState(states.RUNNING)
        }
        else if(input.includes('ArrowDown'))this.player.setState(states. SITTING)
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING)
    }
}
export class Sitting extends State{
    
    constructor(player){
        super('SITTING')
        this.player = player
    }
    enter(){
        this.player.frameY = 6;
    }

    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING)
        else if(input.includes('ArrowRight') || input.includes('ArrowLeft')){
            this.player.setState(states.RUNNING)
        }
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING)
    }
}

export class Running extends State{
    
    constructor(player){
        super('RUNING')
        this.player = player
    }

    enter(){
        this.player.frameY = 1;
    }
    
    handleInput(input){
        if(input.length === 0  && this.player.onGround()){this.player.setState(states.SITTING)
        }
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING)
    }
}

export class Jumping extends State{
    
    constructor(player){
        super('JUMPING')
        this.player = player
    }

    enter(){
        this.player.frameY = 2;
    }
    
    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING)
        else if(input.includes('Control'))this.player.setState(states.  ATTACKING)
    }
}

  export class Attacking extends State{
    
    constructor(player){
        super('ATTACKING')
        this.player = player
    }
    enter(){
        this.player.frameY = 4;
    }

    handleInput(input){
        if(input.length === 0 && this.player.onGround())this.player.setState(states.STANDING)
        else if(input.includes('ArrowUp'))this.player.setState(states.  JUMPING)
        
    }
}
 
 