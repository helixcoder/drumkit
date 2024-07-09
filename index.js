

var n=document.getElementsByClassName("drum").length;
for(var i=0;i<n;i++){

document.getElementsByClassName("drum")[i].addEventListener("click",function(){
    var btn=this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn);
});
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            audio=new Audio("sounds/tom-1.mp3");
            audio.play();
         break;
        case "a":
            audio1=new Audio("sounds/tom-2.mp3");
            audio1.play();
          break;
        case "s":
            audio2=new Audio("sounds/tom-3.mp3");
            audio2.play();
          break;
        case "d":
            audio3=new Audio("sounds/tom-4.mp3");
            audio3.play();
          break;
        case "j":
            audio4=new Audio("sounds/crash.mp3");
            audio4.play();
          break;
        case "k":
            audio5=new Audio("sounds/kick-bass.mp3");
            audio5.play();
          break;
        case "l":
            audio6=new Audio("sounds/snare.mp3");
            audio6.play();
          break;
        default: console.log(btn);
        
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}

