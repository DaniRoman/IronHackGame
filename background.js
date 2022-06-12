/**Clase que controla la logica de cada capa individual como que pinto y a la velocidad a la que se reproducen*/
class Layer{
    constructor(game, width, height, speedModifier, image){
        this.game = game
        this.width = width
        this.height = height
        this.speedModifier = speedModifier
        this.image = image
        this.x = 0
        this.y = 0
    }

    /** Para  mover el background cuando llegue al final del width de la pantalla y ponerlo en l principio de nuevo*/
    update(){
        if(this.x < -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifier
    }

    /** Que elemento del background quiero pintar*/
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x + this.width, this.y, this.width , this.height)
    }
}

/**Clase que controla todas las capas y las junta */
export class Background{
    
    constructor(game){
        this.game = game
        this.width = 1667
        this.height = 500
        /**Aqui cojo las imagenes del html e instancio el nuevo objeto layer con sus parametros */
       
        this.layer11Image = document.getElementById('layer11') 
        this.layer11 = new Layer(this.game, this.width, this.height, 0, this.layer11Image)
        this.layer10Image = document.getElementById('layer10') 
        this.layer10 = new Layer(this.game, this.width, this.height, 0.2, this.layer10Image)
        this.layer9Image = document.getElementById('layer9') 
        this.layer9 = new Layer(this.game, this.width, this.height, 0.4, this.layer9Image)
        this.layer8Image = document.getElementById('layer8') 
        this.layer8 = new Layer(this.game, this.width, this.height, 0.6, this.layer8Image)
        this.layer7Image = document.getElementById('layer7') 
        this.layer7 = new Layer(this.game, this.width, this.height, 0.7, this.layer7Image)
        this.layer6Image = document.getElementById('layer6') 
        this.layer6 = new Layer(this.game, this.width, this.height, 1.2, this.layer6Image)
        this.layer5Image = document.getElementById('layer5') 
        this.layer5 = new Layer(this.game, this.width, this.height, 1, this.layer5Image)
        this.layer4Image = document.getElementById('layer4') 
        this.layer4 = new Layer(this.game, this.width, this.height, 1.4, this.layer4Image)
        this.layer3Image = document.getElementById('layer3') 
        this.layer3 = new Layer(this.game, this.width, this.height, 1, this.layer3Image)
        this.layer2Image = document.getElementById('layer2') 
        this.layer2 = new Layer(this.game, this.width, this.height, 2, this.layer2Image)
        this.layer1Image = document.getElementById('layer1') 
        this.layer1 = new Layer(this.game, this.width, this.height, 1, this.layer1Image)
        
        
        this.backgroundLayers = [this.layer11,this.layer10, this.layer9,this.layer8, this.layer7, this.layer6, this.layer5, this.layer4, this.layer3, this.layer2, this.layer1]
    }

    update(){
        this.backgroundLayers.forEach(element => {
            element.update()
        });
    }
    draw(context){
        this.backgroundLayers.forEach(element => {
            element.draw(context)
        });
    }
}