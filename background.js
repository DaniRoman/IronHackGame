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
    }
}

/**Clase que controla todas las capas y las junta */
export class Background{
    
    constructor(game){
        this.game = game
        this.width = 1667
        this.height = 500
        /**Aqui cojo las imagenes del html e instancio el nuevo objeto layer con sus parametros */
        this.layer1Image = document.getElementById('layer1') //Podria usar layer1 a secas tambien funciona
        this.groundLayer = new Layer(this.game, this.width, this.height, 1, this.layer1Image)
        this.backgroundLayers = [this.groundLayer]
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