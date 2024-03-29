

export function snake( setScore ) {

    //to edit size of grid
    //1. .grid in css width and heigh need to be adjusted (og was 200px h/w)
    //2. width needs to be adjusted (og was 10)
    //3. for loop in createBoard needs to be updated (og was 100)
    //4. .grid div is the squares... essentially size of the snake an apples
    //SOLUTION:
    //1. .grid in css from 200px h/w to 400px h/w to 800px h/w
    //2. width in from 10 to 20 to 40
    //3. for loop in createBoard from 100 to 400 to 1600
        
    let grid = document.querySelector(".grid");
    let popup = document.querySelector(".popup");
    let playAgain = document.querySelector(".playAgain");
    let scoreDisplay = document.querySelector(".scoreDisplay");
    let left = document.querySelector(".left");
    let bottom = document.querySelector(".bottom");
    let right = document.querySelector(".right");
    let up = document.querySelector(".top");
    let width = 20;
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2, 1, 0];
    let direction = 1;
    let score = 0;
    // let speed = 0.8;
    let intervalTime = 0;
    let interval = 0;
    let flag = document.createElement("img")
    flag.src = ('assets/flag.png')
    flag.width = 40;
    flag.height = 25;
    flag.style.position = 'relative'; // set the position to relative
    flag.style.left = '-12px'; // move the image 50 pixels to the left
    flag.style.top = '-5px';

    
    document.addEventListener("onkeydown", handleKeyDown);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay); 
    
    function createBoard() {
        popup.style.display = "none";
        for (let i = 0; i < 400; i++) {
            let div = document.createElement("div");
            grid.appendChild(div);
        }
    }
    
    function startGame() {
        let squares = document.querySelectorAll(".grid div");
        randomApple(squares);
        //random apple
        direction = 1;
        scoreDisplay.textContent = score;
        intervalTime = 100;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach((index) => squares[index].classList.add("snake"));
        interval = setInterval(moveOutcome, intervalTime);
    }

    
    function randomApple(squares){ 
        do { 
            appleIndex = Math.floor(Math.random() * squares.length) 
        } while(squares[appleIndex].classList.contains("snake")) 
        squares[appleIndex].classList.add('apple')
        
        let appleSquare = document.getElementsByClassName('apple')[0]
        appleSquare.append(flag);
    } 
    
    
    function moveOutcome (){ 
        let squares = document.querySelectorAll(".grid div") 
        if(checkForHits(squares)){
            // alert("you hit something") 
            popup.style.display="flex"
            setScore(score)
            return clearInterval(interval)
        } 
        else{ 
            moveSnake(squares) 
        }
    } 
    
    function moveSnake(squares){
            let tail = currentSnake.pop() 
            squares[tail].classList.remove("snake") 
            currentSnake.unshift(currentSnake[0]+direction)  
            // movement ends here  
            eatApple(squares, tail)  
            squares[currentSnake[0]].classList.add("snake")  
    }
    
    function checkForHits(squares){  
        if(  
            (currentSnake[0] + width >=(width*width) && direction === width) || //bottom
            (currentSnake[0] % width === width -1 && direction === 1) ||   //right
            (currentSnake[0] % width === 0 && direction === -1) ||   //left
            (currentSnake[0] - width <= -1 && direction === -width) //removed || to get rid of bottom //top changed from "<= 0" to "<= -1"
            // squares[currentSnake[0] + direction].classList.contains("snake")   
            ){ 
                return true  
            } if (squares[currentSnake[0] + direction].classList.contains("snake")) { //when you hit yourself, added after direction disqualification fixed
                // console.log('hit self')
                return true
            }
            else{  
                return false 
            }
        }
        
    function eatApple(squares,tail){ 
        if(squares[currentSnake[0]].classList.contains("apple")){ 
            squares[currentSnake[0]].classList.remove("apple") 
            squares[tail].classList.add("snake") 
            currentSnake.push(tail)
            randomApple(squares) 
            score++
            scoreDisplay.textContent = score
            // clearInterval(interval) 
            // intervalTime = intervalTime * speed 
            // interval = setInterval(moveOutcome, intervalTime) 
        }
    } 
    
    
    function replay() { 
        grid.innerHTML=""
        score = 0
        setScore(0)
        createBoard()  
        startGame()  
        popup.style.display = "none"; 
    }  
        
            
            
    function handleKeyDown(e) {
        if (e.keyCode===39 && direction != -1){
            direction = 1 // right 
        }else if (e.keyCode===38 && direction != width){ 
            direction = -width //if we press the up arrow, the snake will go ten divs up
        }else if (e.keyCode===37 && direction != 1){ 
            direction = -1 // left, the snake will go left one div
        }else if (e.keyCode===40 && direction != -width){
            direction = +width // down the snake head will instantly appear 10 divs below from the current div 
        } 
    }
            
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };

    
}

// module.exports.score