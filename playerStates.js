const states = {
    SITTING:0,
    RUNNING: 1,
    JUMPING: 2
}

class State{
    constructor(state){
        this.state = state
    }
}
export class Sitting extends State{
    
    constructor(player){
        super('SITTING')
        this.player = player
    }
    enter(){
        this.player.frameY = 0;
    }

    handleInput(input){
        
        if(input.includes('ArrowRight') || input.includes('ArrowLeft')){
            this.player.setState(states.RUNING)
        }
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
        if(input.includes('ArrowDown')){
            this.player.setState(states.SITTING)
        }
    }
}

/**
 * 
 * export class Attacking extends State{
    
    constructor(player){
        super('ATTACKING')
        this.player = player
    }
    enter(){
        this.player.frameY = 4;
    }

    handleInput(input){
        //if(input.includes('Control'))this.player.setState(states.ATTACKING)
    }
}
 * 
 */