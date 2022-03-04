let bombArea = document.querySelector('.campo');
const inPut = document.querySelector('#level');
const btnPlay = document.querySelector('#play');
const container = document.querySelector('.container')
let finished = false;
let gameEnd = false;

btnPlay.addEventListener('click', play)

function play() {
    // if (gameEnd == false) {
    container.classList.remove("medium", "hard");
    bombArea.innerHTML = "";
   
    //Arrays 
    const bombs = [];
    const boxNums = [];
    
    let level = inPut.value;
    let min = 1;
    let max;
    console.log(level);

    if (level == "easy") {
         max = 100;
    } else if (level == "medium") {
        container.classList.add("medium");
        max = 81;
    } else {
        container.classList.add("hard");
        container.classList.add("hard");
        max = 49;
        
    }
    
    console.log(finished);
    generateRandomBomb(max);
    generateBoxNum(max);
    bombSpreader();
    console.log(boxNums);
   
    for(let i = min; i <= max; i++){
        
        if (boxNums[i] == 'BOMB') {
            divBomb(i);

        } else {
            divBox(i);
        }
       
    }

    









    function generateRandomBomb(max) {
        while (bombs.length < 16)  {
            let = randomBombNum = randomNum(1, max);
            
            if (!bombs.includes(randomBombNum)) {
                bombs.push(randomBombNum);
                
            }
        }
    }

    function generateBoxNum(max) {
        let boxNum = 1;
        while (boxNums.length < max) {
            boxNums.push(boxNum);
           
            boxNum++;
        }
    }


    function bombSpreader() {
        i = 0
        while (i < 16) {
        let changeBomb = parseInt(bombs[i]);
        boxNums[changeBomb] = "BOMB" 
        i++;
        }
    }
  
    
}






function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function clickedBox () {
    this.classList.add("selected", "show");

}

function clickedBomb () {
    
    this.classList.add("selected-bomb", "bomb");
    finished = true;
    const finishWindow = document.querySelector('.finish');
    if (finished == true) {
        finishWindow.classList.add('display-box');
        let boxCell = document.querySelectorAll('.box');
        console.log(boxCell);
        
        for (i=0; i < boxCell.length; i++) {
            boxCell[i].removeEventListener("click", clickedBomb);
            boxCell[i].removeEventListener("click", clickedBox);
            if (boxCell[i].innerHTML == "") {
            boxCell[i].classList.add("selected-bomb");
            } else {
            
           } 
        
        }
        
    } 
}

function divBox(i) {
    let box = document.createElement("div");
    let randomNumMax3 = randomNum(0, 4);
    box.innerHTML = randomNumMax3;
    box.classList.add("box", "hidden");
    box.addEventListener("click", clickedBox);
    bombArea.append(box);
}

function divBomb(i) {
    
    
    let box = document.createElement("div");
    box.classList.add("box", "hidden");
    box.addEventListener("click", clickedBomb);
    bombArea.append(box);
    
}

