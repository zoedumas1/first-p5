// Let's build some functions in p5.jhs

//Functions are like actions, they make stuff happen


//Define a setup function 


function setup(){
    //Call the create canvas and background functions
    // Numbers- data type that is a number
    createCanvas(800, 600) //how wide and how tall the canvas will be
    background(150)
    
}

//Variables in java script are created using the var keyword

var position = 100 
var speed = 3
//Goal is to animate this bike
function draw(){
    clear ()
    fill(250)
    //String-- data tyoe that is a serise of characters
    //variables contain values
    //assign values to variables
    
    rect(position, 100, 150, 60, 20); //how wide, how tall, position from the top, position to the left
    fill("lightblue")
    ellipse(position, 150, 75, 75);
     ellipse(position + 150, 150, 75, 75);
     
     position= position + speed
     
     //Conditionals -- allows program to make decisions 
     if (position > 800) {
         speed= speed*-1
     }
     
     if (position <0) {
         speed= speed*-1
         
     }
     fill(0)
     textSize(40)
     //concatenate-- chain together
     
     

     
    }