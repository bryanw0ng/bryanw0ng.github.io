var counter = {
    value: 0
};

var dots = document.getElementsByClassName("barSquare");
var arrows = document.getElementsByClassName("arrow");

//first
var shit = document.getElementsByClassName("pineapple")
var k={
	value: 0
};

function lol(k){
	if (k.value >= shit.length){
		clearInterval(myVar);
	}
	else{
		shit[k.value].classList.add("animate");
		k.value++;
	}
}
var myVar = setInterval(lol, 20, k);

//second

var wong = document.getElementById("wong"); //add flash to wong!
function addFlash(wong){
	setTimeout(flash, 2, wong);
}

function flash(wong){
	wong.classList.add("flash");
}

var balls = document.getElementsByClassName("ball");

function moveDown(ball, top, bottom, interval){ //pass in a ball object
	var ballMT = ball.style.marginTop; 
	var str = ballMT.substring(0, ballMT.length-1);
	str = Number(str);
	str = str + interval;
	if (str>bottom){
		str = top;
	}
	ball.style.marginTop = str + "%";
}

function moveAll(){
	var move1 = setInterval(moveDown, 25, balls[0], -29, 132, .35);
	var move2 = setInterval(moveDown, 25, balls[1], -60, 100, .20);
	var move3 = setInterval(moveDown, 25, balls[2], -74, 107, .32);
	var move4 = setInterval(moveDown, 25, balls[3], -95, 74, .35);
	var move5 = setInterval(moveDown, 25, balls[4], -92, 64, .37);
	var move6 = setInterval(moveDown, 25, balls[5], -115, 47, .3);
	var move7 = setInterval(moveDown, 25, balls[6], -154, 28, .20);
	setInterval(moveDown, 25, balls[4], -92, 64, .37);
}

moveAll();

var i={
	value: 0
};

var j={
	value: 0,
	counter: 0
};

function setSway(i){
	if (i.value >= balls.length){
		clearInterval(myVar2);
	}
	else{ 
		balls[i.value].classList.add("sway" + i.value);
		i.value++;
	}
}

var myVar2 = setInterval(setSway, 500, i);



//transitions

function playStatus(x){ //takes in the counter value controls audio
	switch(x){
		case(1):
		{
			start("californiaDreamin", currentAudio);
			startBoosts(true, boost1, boost2, boost3);
			break;
		}
		case(2):
		{
			start("patours", currentAudio);
			setTimeout(startBoosts, 4900, false, boost1, boost2, boost3);
			break;
		}
		default:
		{
			stop("californiaDreamin");
			stop("patours");
			startBoosts(true, boost1, boost2, boost3);
			break;
		}
	}
}
function moveRight() {
	var sections = document.getElementsByTagName('section');

	for (var k=0; k<sections.length; k++){//make them into integers, subtract 100 and convert back into string
		var marginTop = sections[k].style.marginTop; // string
		var noPercent = marginTop.substring(0, marginTop.length-1);
		sections[k].style.marginTop = (Number(noPercent) - 100) + "%";
	}
	dots[counter.value].classList.remove("highlight");
	counter.value++;
	dots[counter.value].classList.add("highlight");
	if (counter.value == 3) {
	    arrows[1].style.display = "none";
	    arrows[0].style.display = "block";
	}
	else if (counter.value == 0) {
	    arrows[0].style.display = "none";
	    arrows[1].style.display = "block";
	}
	else {
	    arrows[0].style.display = "block";
	    arrows[1].style.display = "block";
	}
	playStatus(counter.value);
}

function moveLeft() {
	var sections = document.getElementsByTagName('section');

	for (var k=0; k<sections.length; k++){//make them into integers, subtract 100 and convert back into string
		var marginTop = sections[k].style.marginTop; // string
		var noPercent = marginTop.substring(0, marginTop.length-1);
		sections[k].style.marginTop = (Number(noPercent) + 100) + "%";
	}
	dots[counter.value].classList.remove("highlight");
	counter.value--;
	dots[counter.value].classList.add("highlight");
	if (counter.value == 0) {
	    arrows[1].style.display = "block";
	    arrows[0].style.display = "none";
	}
	else if (counter.value == 3) {
	    arrows[1].style.display = "none";
	    arrows[0].style.display = "block";
	}
	else {
	    arrows[0].style.display = "block";
	    arrows[1].style.display = "block";
	}
	playStatus(counter.value);
}

//third

function addBoost(objects, i){
    setTimeout(function () { objects[i].style.display = "block";}, 30*i);
}

function removeBoost(objects, k){
    setTimeout(function () { objects[k].style.display = "none";}, 60-(k*20));
}

function boost(x, amount) { //put in a class "boost_"
    var boost = document.getElementsByClassName(x);

    for (var i = 0; i < amount; i++) {
       addBoost(boost, i);
    }
}

function sBoost(x){
	var boost = document.getElementsByClassName(x);

    for (var i = 3; i < 5; i++) {
       addBoost(boost, i);
    }
}

function subBoost(x, amount) {
    var boost = document.getElementsByClassName(x);

    for (var k = amount-1; k > -1; k--) {
        removeBoost(boost, k);
    }
}

function sSubBoost(x) {
    var boost = document.getElementsByClassName(x);

    for (var k = 4; k > 2; k--) {
        removeBoost(boost, k);
    }
}

function altBoost(x, amount) {
    boost(x, amount);
    setTimeout(subBoost, 300, x, amount);
}

function superBoost(x){
	boost(x, 3); //takes 90 ms
	setTimeout(sBoost, 350, x); //add outer 
	setTimeout(sSubBoost, 800, x); //remove outer
	setTimeout(subBoost, 830, x, 3); //remove inner
}
//audio

var currentAudio={
	value: "patours"
};

function start(x, currentAudio){ //starts playing audio x string
	var audio = document.getElementById(x);
	var cAudio = document.getElementById(currentAudio.value); //pass in a string of id
	cAudio.load();
	currentAudio.value = x;
	audio.play();
}

function stop(x){
	document.getElementById(x).load();
}

var boost1={ //hold the intervals
	value: 9
};
var boost2={
	value:9
};
var boost3={
	value:9
};

function startBoosts(x, boost1, boost2, boost3){
	if(x == true){
		clearInterval(boost1.value);
		clearInterval(boost2.value);
		clearInterval(boost3.value);
	}
	else{
		altBoost("boost1", 3);
		boost1.value = setInterval(superBoost, 1464, "boost1", 3);
		setTimeout(function(){altBoost("boost2", 3);}, 732);
		boost3.value = setInterval(altBoost, 2196, "boost3", 3);
		boost2.value = setInterval(altBoost, 183, "boost2", 2);
	}
}
