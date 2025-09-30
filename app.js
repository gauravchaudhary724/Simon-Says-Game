let body = document.querySelector("body");
let p = document.querySelector("p");
let userSeq = [];
let gameSeq = [];
let highestscor = 0;

let level = 0;
let started = false;
let score = 0;
let h4 = document.querySelector("h4");
h4.innerText = `highest score is ${highestscor}`;
document.addEventListener("keypress", function(){
    if(started == false){ 
    console.log("game is started");
    started =true;
    levelUp();
    }
    
})

function blink(){
    let colors = ["brown","seagreen","orange","hotpink"];
    let el = colors[Math.floor(Math.random() * 4)];
    let randel = document.querySelector(`.${el}`);
    flash(randel);
    gameSeq.push(el);
    console.log(gameSeq);

}
function check(idx){
    console.log(`current level is ${level}`);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        p.innerText = `game is over and your score is ${Math.max(level-1, 0)} press any key to start`;
        let body = document.querySelector("body");
        body.classList.add("screen");
        setTimeout( () =>{
            body.classList.remove("screen");
        }, 100);
        // console.log(level);
        if(level > highestscor){
            highestscor = level-1;
            h4.innerText = `highest score is ${highestscor}`;
        }
        reset();
    }
}
function user(){
    let divO = document.querySelectorAll(".com");
    for(divi of divO){
        divi.addEventListener("click", function(){
            userflash(this);
            userSeq.push(`${this.classList[2]}`);
            console.log(userSeq);
            check(userSeq.length-1);
        })
    }
}
function userflash(randel){

    randel.classList.add("userflash");
    setTimeout( () =>{
        randel.classList.remove("userflash");
    }, 300);
}
function flash(randel){

    randel.classList.add("flash");
    setTimeout( () =>{
        randel.classList.remove("flash");
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    p.innerText = `level ${level}`;
    blink();
}
function reset(){ 
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
   user(); 