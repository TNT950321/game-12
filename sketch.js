const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time = 0
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) 
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35);
    fill("white");
    text("time"+ time,width-300,50);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Melbourne");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
     time = datetime.slice(11,13);
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
    if (hour >=02 && hour <=04) {
    bg="sunrize1.png";
   
    }
else{ if (hour >=04 && hour <=06) {
    bg="sunrize2.png";
    }
       
else{if (hour >=06 && hour <=08) {
    bg="sunrize3.png";
    }
            
else{if (hour >=08 && hour <=10) {
    bg="sunrize4.png";
    }

else{if (hour >=10 && hour <=13) {
    bg="sunrize5.png";
    }
else{if (hour >=13 && hour <=16) {
    bg="sunset7.png";
    }
else{if (hour >=16 && hour <=18) {
    bg="sunset8.png";
    }
else{if (hour >=18 && hour <=20) {
    bg="sunset9.png";
    }
                                    
else{if (hour >=20 && hour <=21) {
    bg="sunset10.png";
    }                               
else{ if (hour >=21 && hour <=22) {
    bg="sunset11.png";
    }
                                           
else{
    bg="sunset12.png";
}
}
}
}
}
}
}    
}    
}  
}
    backgroundImg=loadImage(bg)

    //load the image in backgroundImg variable here

}
