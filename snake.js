class Snake {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.xSpeed = 10;
        this.ySpeed = 0;
        this.tailLength = 0;
        this.snakeTail = [{x: 10, y: 10, xLast: 0, yLast:0}];
        this.up = [38, 87]
        this.down = [40, 83]
        this.right = [39, 68]
        this.left = [37, 65]
    }

    drawSnake() {
        ctx.clearRect(0,0,canv.width, canv.height)
        ctx.fillStyle = 'black'
        this.snakeTail.forEach(item => {
            ctx.fillRect(item.x, item.y, 10, 10)
        })

       
    }

    run() {
        this.snakeTail.map(item => {
           if (this.snakeTail.indexOf(item) == 0) {
            item.xLast = item.x
            item.yLast = item.y
            item.x += this.xSpeed
            item.y += this.ySpeed
        } else {
            item.xLast = item.x
            item.yLast = item.y
            item.x = this.snakeTail[this.snakeTail.indexOf(item) - 1].xLast
            item.y = this.snakeTail[this.snakeTail.indexOf(item) - 1].yLast
        }
        })

        if(this.snakeTail[0].x >= canv.width) {
            this.snakeTail[0].x = 0
        } else if (this.snakeTail[0].x < 0) {
            this.snakeTail[0].x = canv.width
        } else if (this.snakeTail[0].y >= canv.height) {
            this.snakeTail[0].y = 0
        } else if (this.snakeTail[0].y < 0) {
            this.snakeTail[0].y = canv.height
        }
    }

    changeDirection(event) {
        if(event.keyCode == this.up[0] || event.keyCode == this.up[1]) {
            if(this.ySpeed == 10) {
                console.log('no way')
            } else {
                this.xSpeed = 0
                this.ySpeed = -10
            }
        } 
         if(event.keyCode == this.down[0] || event.keyCode == this.up[1]) {
            if(this.ySpeed == -10) {
                console.log('no way')
            } else {
                this.xSpeed = 0
                this.ySpeed = 10
            }
        } 
         if(event.keyCode == this.left[0] || event.keyCode == this.left[1]) {
            if(this.xSpeed == 10) {
                console.log('no way')
            } else {
                this.xSpeed = -10
                this.ySpeed = 0
            }
        } 
        if(event.keyCode == this.right[0] || event.keyCode == this.right[1]) {
            if(this.xSpeed == -10) {
                console.log('no way')
            } else {
                this.xSpeed = 10
                this.ySpeed = 0
            }
        }
    }

    snakeEatFruit(fruit) {
        if(this.snakeTail[0].x == fruit.x && this.snakeTail[0].y == fruit.y) {
            ++this.tailLength
            this.snakeTail.push({x: this.snakeTail[this.snakeTail.length - 1].xLast, y: this.snakeTail[this.snakeTail.length - 1].yLast, xLast:0, yLast:0})
            fruit.pickPosition()
        }
    }

    loseCondition() {
        this.snakeTail.forEach(item => {
            if(this.snakeTail.indexOf(item) == 0) {
                return "do nothing"
            } else {
            
                if (item.x == this.snakeTail[0].x && item.y == this.snakeTail[0].y) {
                    let coffeBreak = confirm("You've lost")
                    if(coffeBreak) {
                        this.snakeTail.splice(1,this.snakeTail.length - 1)
                        this.snakeTail[0] = {x: 10, y: 10, xLast: 0, yLast:0}
                        this.tailLength = 0
                    } else {
                        ctx.font = '48px serif'
                        ctx.fillText('Get out of my way', 200, 200)
                    }
                }
            }
        })

    }
}