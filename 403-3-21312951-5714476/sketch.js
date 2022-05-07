/*

Officer: 5714476
CaseNum: 403-3-21312951-5714476

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 60 meters from Norbert's Burrito Stall then alert local police by drawing a LightSeaGreen circle around it with a radius of 60 pixels.
- if Shiffman is in Aaron Swartz Memorial Park then the neighbourhood watch must be notified by drawing a Chocolate rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a LawnGreen rectangle covering the area between Turing Place, Gates Avenue, Mullenweg Street and Adele Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...

    if (dist(708,281,mouseX,mouseY)<60){
      fill(32,178,170);
      ellipse(708,281,60*2);
    } else{
        if (mouseX >= 1398 && mouseX <= 1657 && mouseY >= 436 && mouseY <= 569){
        fill(210,105,30);
        rect(1398,436,1657-1398,569-436);
        } else{
            fill(124,252,0);
            rect(322,628,1363-322,809-628);
    }

    
    }

   

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
