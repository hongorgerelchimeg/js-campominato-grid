let bombArea = document.querySelector('.campo');
const inPut = document.querySelector('#level');
const btnPlay = document.querySelector('#play');
const container = document.querySelector('.container')


btnPlay.addEventListener('click', play)

function play() {
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
    this.classList.add("selected");
}

function clickedBomb () {
    this.classList.add("selected-bomb", "bomb");
}

function divBox(i) {
    let box = document.createElement("div");
    box.innerHTML = i;
    box.classList.add("box");
    box.addEventListener("click", clickedBox);
    bombArea.append(box);
}

function divBomb(i) {
    let box = document.createElement("div");
    box.innerHTML = i;
    box.classList.add("box");
    box.addEventListener("click", clickedBomb);
    bombArea.append(box);
}

