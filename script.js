// document.querySelectorAll(".controllers>button")
let audio =  document.getElementById("startAudio");
audio.play()



function actualPosistion() {
    var char =document.getElementById("chardiv")
    setTimeout(() => {
        char.style.top = 65+"%";
    }, 500);
}



function funup(){
    i = 15
    let audio =  document.getElementById("hitAudio");
    audio.play()

   var char =document.getElementById("chardiv")
    char.style.top = 65-i+"%";
    actualPosistion();
}

function funupboost(){
    i = 20
    var char =document.getElementById("chardiv")
     char.style.top = 65-i+"%";
     actualPosistion();
}

function fundown(){
    i = 5
   var char =document.getElementById("chardiv")
   if(char.style.top == "65%"){
    console.log("working bro")
    actualPosistion();
   }else{
    char.style.top = 65+i+"%";
    actualPosistion();
   }
}

document.addEventListener("keydown",function (event){
    keypress(event.key);
    // event.preventDefault();
    console.log(event.key)
  })
  
function  keypress(key){
    switch(key){
        case "w":
            funup();
            break;
        case "s":
            fundown();
            break;
        case "a":
            funleft();
            break; 
        case "d":
            funright();
            break;
        case "ArrowUp":
            funup();
            break;
        case "ArrowDown":
            fundown();
            break;
        case "Enter":
            window.location.reload()
            break;
    }
}

var score = 0
function checkCollision() {
    var char = document.getElementById("chardiv");
    var charRect = char.getBoundingClientRect();
    var cactus = document.querySelector(".coin");
    var cactusRect = cactus.getBoundingClientRect();

    if (charRect.bottom > cactusRect.top &&
        charRect.top < cactusRect.bottom &&
        charRect.right > cactusRect.left &&
        charRect.left < cactusRect.right) {
        console.log("Collision detected! Game over!"); 
        const finalScore =  score    
        document.getElementById("finalScore").innerHTML = Math.floor(finalScore)
        document.getElementById("over").style.display = "inline"   
        const started =  document.body.querySelectorAll(".start") 
        started.forEach((disappear)=>{
            disappear.style.display = "none"
        }) 
        clearInterval(inter)
        document.getElementById("cactus").style.animation = "none"
        var stop = document.querySelectorAll(".brick")
        stop.forEach((stopit)=>{
            stopit.style.animation = "none"
        })
        document.getElementById("enter").innerHTML = "Press 'Enter' to restart game"
        let audio =  document.getElementById("endAudio");
        audio.play()
        document.getElementById("image").setAttribute("src","./pikaend.gif")
    }else{
        score = score+0.1
        document.getElementById("score").innerHTML = Math.floor(score)
    }
}


inter = setInterval(checkCollision, 300); 
