const canv = document.getElementById('canvas');
const ctx = canv.getContext('2d');

canv.width = 500;
canv.height = 500;

let snake = new Snake();
let fruit = new Fruit();


    
   function startAgain(){ 
    fruit.pickPosition()   
    
    window.setInterval(() => {
    snake.drawSnake()
    snake.run()
    fruit.drawFruit()
    snake.snakeEatFruit(fruit)
    snake.loseCondition()
    document.getElementById('score').innerHTML = snake.tailLength

    }, 100)
}

window.addEventListener('keydown', e => snake.changeDirection(e))
startAgain()