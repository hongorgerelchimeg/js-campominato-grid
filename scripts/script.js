let bombArea = document.querySelector('.campo');
const inPut = document.querySelector('#level');
const btnPlay = document.querySelector('#play');
const container = document.querySelector('.container')

btnPlay.addEventListener('click', function(){
    container.classList.remove("medium", "easy");
    bombArea.innerHTML = "";
    let level = inPut.value;
    let min = 1;
    let max;
    console.log(level);
    if (level == "hard") {
         max = 100;
    } else if (level == "medium") {
        container.classList.add("medium");
        max = 81;
    } else {
        container.classList.add("easy");
        max = 49;
        console.log(max);
    }
    for (let i = min; i <= max; i++) {
        console.log(i);
        bombArea.innerHTML += `<div class="box box-${i}">${i}</div>`;
    }

    

})



// // let box = document.querySelectorAll('.box');
// // box.onlick = function() {backgroundChange()};

// //     // btnClick.addEventListener('click', function(){
// //     //     const box = document.querySelector('.box');
        
// //     // })

// //     function backgroundChange () {
// //         document.querySelectorAll('.box').classList.toggle("selected");
// //     }
// let box = document.querySelector('.box');
//     box.onclick = function changeBackground() {

//         box.classList.toggle("selected");
//  }

