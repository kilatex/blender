var blenderState = "off";
var blender = document.getElementById('blender');
var blenderSound = document.getElementById('blender-sound');
var blenderButtonSound = document.getElementById("blender-button-sound");

function turnBlender(){
    sound();
    blender.classList.toggle('active')
    if(blenderState == "off"){
        blenderState = "on"
    }else{
        blenderState = "OFF"
    }
}

function sound(){
    if( blenderSound.paused){
        blenderButtonSound.play();
        blenderSound.play();
    }else{
        blenderButtonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}