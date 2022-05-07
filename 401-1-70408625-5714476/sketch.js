/*

Officer: 5714476
CaseNum: 401-1-70408625-5714476

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall && is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies && burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods && has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab && get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If warfarin goes above 0.61 || alcohol dips below 0.32, reduce paracetamol by 0.05
	- When formaldehyde dips below 0.55, increase paracetamol by 0.05
	- If deadly_nightshade goes above 0.53 && warfarin dips below 0.4, decrement CalciumChloride by 0.05
	- If formaldehyde goes above 0.73 || alcohol goes above 0.74, try increasing CalciumChloride by 0.05
	- When deadly_nightshade dips below 0.46 && warfarin dips below 0.64, reduce calcium_gluconate by 0.02
	- If alcohol dips below 0.63, increment calcium_gluconate by 0.02
	- When deadly_nightshade goes above 0.4, reduce insulin by 0.04
	- When alcohol goes above 0.56 || formaldehyde goes above 0.36, increment insulin by 0.03


Your conditional statements should:

consider the following poisons:

	- deadly_nightshade
	- alcohol
	- formaldehyde
	- warfarin


and modify the following antidotes:

	- paracetamol
	- CalciumChloride
	- calcium_gluconate
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var deadly_nightshade;
var alcohol;
var formaldehyde;
var warfarin;


//Declare the antidote variables
var paracetamol;
var CalciumChloride;
var calcium_gluconate;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons && antidotes
	deadly_nightshade = 0.5;
	alcohol = 0.5;
	formaldehyde = 0.5;
	warfarin = 0.5;
	paracetamol = 0.5;
	CalciumChloride = 0.5;
	calcium_gluconate = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	if (warfarin > 0.61 || alcohol < 0.32){
		paracetamol -= 0.05;
	}

	if (formaldehyde < 0.55){
		paracetamol += 0.05;
	}

	if (deadly_nightshade > 0.53 && warfarin < 0.4){
		CalciumChloride -= 0.05;
	}

	if (formaldehyde > 0.73 || alcohol > 0.74){
		CalciumChloride += 0.05;
	}

	if (deadly_nightshade < 0.46 && warfarin < 0.64){
		calcium_gluconate -= 0.02;
	}

	if (alcohol < 0.63){
		calcium_gluconate += 0.02;
	}

	if (deadly_nightshade > 0.4){
		insulin -= 0.04;
	}

	if (alcohol > 0.56 || formaldehyde > 0.36){
		insulin += 0.03;
	}
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines && set the same variables to constant values
		instead.
	*/

	deadly_nightshade = nextValue(graphs[0],deadly_nightshade);
	alcohol = nextValue(graphs[1],alcohol);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	warfarin = nextValue(graphs[3],warfarin);


	paracetamol = constrain(paracetamol, 0, 1);
	CalciumChloride = constrain(CalciumChloride, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	insulin = constrain(insulin, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('warfarin: ' + nf(warfarin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(paracetamol,50,'paracetamol');
	drawBar(CalciumChloride,200,'CalciumChloride');
	drawBar(calcium_gluconate,350,'calcium_gluconate');
	drawBar(insulin,500,'insulin');


}

function nextValue(graph, val)
{
	//gets the next value for a vital && puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
