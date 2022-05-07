/*

Officer: 5714476
CaseNum: 401-0-50098695-5714476

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If strychnine dips below 0.31, try decreasing hydrochloric_acid by 0.01
	- When methanol dips below 0.6, try increasing hydrochloric_acid by 0.04
	- If methanol dips below 0.47, decrease aspirin by 0.04
	- If strychnine dips below 0.75, increase aspirin by 0.01
	- When strychnine dips below 0.3, decrement ethanol by 0.05
	- When methanol dips below 0.59, increase ethanol by 0.01


Your conditional statements should:

consider the following poisons:

	- warfarin
	- strychnine
	- methanol


and modify the following antidotes:

	- hydrochloric_acid
	- aspirin
	- ethanol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var warfarin;
var strychnine;
var methanol;


//Declare the antidote variables
var hydrochloric_acid;
var aspirin;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	warfarin = 0.5;
	strychnine = 0.5;
	methanol = 0.5;
	hydrochloric_acid = 0.5;
	aspirin = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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

	if (strychnine < 0.31){
		hydrochloric_acid -= 0.01;
	}

	if (methanol < 0.6){
		hydrochloric_acid += 0.04;
	}

	if (methanol < 0.47){
		aspirin -= 0.04;
	}

	if (strychnine < 0.75){
		aspirin += 0.01
	}	

	if (strychnine < 0.3){
		ethanol -= 0.05
	}

	if (methanol < 0.59){
		ethanol += 0.01 
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	warfarin = nextValue(graphs[0],warfarin);
	strychnine = nextValue(graphs[1],strychnine);
	methanol = nextValue(graphs[2],methanol);


	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('warfarin: ' + nf(warfarin,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('methanol: ' + nf(methanol,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(hydrochloric_acid,50,'hydrochloric_acid');
	drawBar(aspirin,200,'aspirin');
	drawBar(ethanol,350,'ethanol');


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
