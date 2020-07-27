class Fruit {
    constructor() {
        this.x = 0
        this.y = 0
        this.piece = 10
    }

    pickPosition() {
        this.x = Math.floor((Math.random() * 50)) * this.piece
        this.y = Math.floor((Math.random() * 50)) * this.piece
    }

    drawFruit() {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.x, this.y, 10, 10)
    }

}