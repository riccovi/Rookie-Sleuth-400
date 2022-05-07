/*

Officer: 5714476
CaseNum: 401-2-25775980-5714476

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When formaldehyde dips below 0.62 and lead dips below 0.28, or on the other hand, insecticide goes above 0.58, try decreasing plasma by 0.01
	- When amanita_mushrooms goes above 0.33 and botulinium goes above 0.73, try increasing plasma by 0.05
	- If botulinium goes above 0.3 or formaldehyde goes above 0.62, try decreasing insulin by 0.03
	- When amanita_mushrooms goes above 0.37 and insecticide goes above 0.71, raise insulin by 0.01
	- If amanita_mushrooms dips below 0.74 or lead goes above 0.4, decrease antibodies by 0.05
	- If insecticide goes above 0.37, formaldehyde dips below 0.71, and also snakeVenom dips below 0.56, increase antibodies by 0.03
	- If formaldehyde goes above 0.27 and botulinium dips below 0.27, or on the other hand, amanita_mushrooms dips below 0.42, try decreasing paracetamol by 0.05
	- If insecticide goes above 0.54, lead dips below 0.61, and also snakeVenom dips below 0.3, increase paracetamol by 0.05


Your conditional statements should:

consider the following poisons:

	- amanita_mushrooms
	- insecticide
	- botulinium
	- snakeVenom
	- formaldehyde
	- lead


and modify the following antidotes:

	- plasma
	- insulin
	- antibodies
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var amanita_mushrooms;
var insecticide;
var botulinium;
var snakeVenom;
var formaldehyde;
var lead;


//Declare the antidote variables
var plasma;
var insulin;
var antibodies;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	amanita_mushrooms = 0.5;
	insecticide = 0.5;
	botulinium = 0.5;
	snakeVenom = 0.5;
	formaldehyde = 0.5;
	lead = 0.5;
	plasma = 0.5;
	insulin = 0.5;
	antibodies = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

	if ((formaldehyde < 0.62 && lead < 0.28) || insecticide > 0.58){
		plasma -= 0.01;
	}

	if (amanita_mushrooms > 0.33 && botulinium > 0.73){
		plasma += 0.05;
	}

	if (botulinium > 0.3 || formaldehyde > 0.62){
		insulin -= 0.03;
	}

	if (amanita_mushrooms > 0.37 && insecticide > 0.71){
		insulin += 0.01;
	}

	if (amanita_mushrooms < 0.74 || lead > 0.4){
		antibodies -= 0.05;
	}

	if (insecticide > 0.37 && formaldehyde < 0.71 && snakeVenom < 0.56){
		antibodies += 0.03;
	}

	if ((formaldehyde > 0.27 && botulinium < 0.27) || amanita_mushrooms < 0.42){
		paracetamol -= 0.05;
	}

	if (insecticide > 0.54 && lead < 0.62 && snakeVenom < 0.3){
		paracetamol += 0.05
	}
	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	amanita_mushrooms = nextValue(graphs[0],amanita_mushrooms);
	insecticide = nextValue(graphs[1],insecticide);
	botulinium = nextValue(graphs[2],botulinium);
	snakeVenom = nextValue(graphs[3],snakeVenom);
	formaldehyde = nextValue(graphs[4],formaldehyde);
	lead = nextValue(graphs[5],lead);


	plasma = constrain(plasma, 0, 1);
	insulin = constrain(insulin, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('botulinium: ' + nf(botulinium,1,2), 20,60);
	fill(colors[3]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(plasma,50,'plasma');
	drawBar(insulin,200,'insulin');
	drawBar(antibodies,350,'antibodies');
	drawBar(paracetamol,500,'paracetamol');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
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
