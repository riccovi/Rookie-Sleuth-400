/*

Officer: 5714476
CaseNum: 401-3-91320099-5714476

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When either spider_venom goes above 0.61, strychnine dips below 0.71, ricin goes above 0.48, or perhaps snake_venom dips below 0.25, reduce charcoal by 0.02
	- When sarin dips below 0.27 or warfarin goes above 0.55, whilst at the same time, insecticide goes above 0.34 and cyanide goes above 0.28, raise charcoal by 0.05
	- When either sarin dips below 0.7, spider_venom dips below 0.47, strychnine goes above 0.44, or perhaps insecticide dips below 0.5, reduce calciumGluconate by 0.01
	- If warfarin dips below 0.39 or snake_venom goes above 0.38, whilst at the same time, cyanide goes above 0.7 and ricin goes above 0.75, increment calciumGluconate by 0.01
	- When snake_venom dips below 0.54 or warfarin goes above 0.33, whilst at the same time, cyanide dips below 0.65 and strychnine dips below 0.4, decrement ethanol by 0.02
	- When insecticide dips below 0.28 and ricin dips below 0.5, whilst at the same time, spider_venom dips below 0.66 or sarin goes above 0.65, increment ethanol by 0.02
	- If ricin goes above 0.26, or on the other hand, snake_venom goes above 0.47 and insecticide goes above 0.44, decrease sulphates by 0.02
	- If warfarin goes above 0.67, cyanide dips below 0.43, and also sarin dips below 0.25, try increasing sulphates by 0.04
	- If strychnine dips below 0.52 and warfarin dips below 0.36, or on the other hand, insecticide goes above 0.56, reduce opioids by 0.04
	- When sarin dips below 0.55, cyanide dips below 0.54, and also spider_venom dips below 0.33, raise opioids by 0.05


Your conditional statements should:

consider the following poisons:

	- ricin
	- cyanide
	- spider_venom
	- snake_venom
	- insecticide
	- warfarin
	- sarin
	- strychnine


and modify the following antidotes:

	- charcoal
	- calciumGluconate
	- ethanol
	- sulphates
	- opioids


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var ricin;
var cyanide;
var spider_venom;
var snake_venom;
var insecticide;
var warfarin;
var sarin;
var strychnine;


//Declare the antidote variables
var charcoal;
var calciumGluconate;
var ethanol;
var sulphates;
var opioids;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	cyanide = 0.5;
	spider_venom = 0.5;
	snake_venom = 0.5;
	insecticide = 0.5;
	warfarin = 0.5;
	sarin = 0.5;
	strychnine = 0.5;
	charcoal = 0.5;
	calciumGluconate = 0.5;
	ethanol = 0.5;
	sulphates = 0.5;
	opioids = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

	if (spider_venom > 0.61 || strychnine < 0.71 || ricin > 0.48 || snake_venom < 0.25){
		charcoal -= 0.02;
	}

	if ((sarin < 0.27 || warfarin > 0.55) && (insecticide > 0.34 && cyanide > 0.28)){
		charcoal += 0.05;
	}

	if (sarin < 0.7 || spider_venom < 0.47 || strychnine > 0.44 || insecticide < 0.5){
		calciumGluconate -= 0.01;
	}

	if ((warfarin < 0.39 || snake_venom > 0.38) && (cyanide > 0.7 && ricin > 0.75)){
		calciumGluconate += 0.01;
	}

	if ((snake_venom < 0.54 || warfarin > 0.33) && (cyanide < 0.65 && strychnine < 0.4)){
		ethanol -= 0.02;
	}

	if ((insecticide < 0.28 && ricin < 0.5) && (spider_venom < 0.66 || sarin > 0.65)){
		ethanol += 0.02;
	}

	if ((ricin > 0.26) || (snake_venom > 0.47 && insecticide > 0.44)){
		sulphates -= 0.02
	}

	if (warfarin > 0.67 && cyanide < 0.43 && sarin < 0.25){
		sulphates += 0.04;
	}

	if ((strychnine < 0.52 && warfarin < 0.36) || (insecticide > 0.56)){
		opioids -= 0.04;
	}

	if (sarin < 0.55 && cyanide < 0.54 && spider_venom < 0.33){
		opioids += 0.05;
	}

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	ricin = nextValue(graphs[0],ricin);
	cyanide = nextValue(graphs[1],cyanide);
	spider_venom = nextValue(graphs[2],spider_venom);
	snake_venom = nextValue(graphs[3],snake_venom);
	insecticide = nextValue(graphs[4],insecticide);
	warfarin = nextValue(graphs[5],warfarin);
	sarin = nextValue(graphs[6],sarin);
	strychnine = nextValue(graphs[7],strychnine);


	charcoal = constrain(charcoal, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	opioids = constrain(opioids, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('ricin: ' + nf(ricin,1,2), 20,20);
	fill(colors[1]);
	text('cyanide: ' + nf(cyanide,1,2), 20,40);
	fill(colors[2]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,60);
	fill(colors[3]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,80);
	fill(colors[4]);
	text('insecticide: ' + nf(insecticide,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);
	fill(colors[6]);
	text('sarin: ' + nf(sarin,1,2), 20,140);
	fill(colors[7]);
	text('strychnine: ' + nf(strychnine,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(calciumGluconate,200,'calciumGluconate');
	drawBar(ethanol,350,'ethanol');
	drawBar(sulphates,500,'sulphates');
	drawBar(opioids,650,'opioids');


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
