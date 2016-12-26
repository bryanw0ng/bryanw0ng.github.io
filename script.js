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
		console.log(i.value);
		balls[i.value].classList.add("sway" + i.value);
		i.value++;
	}
}

var myVar2 = setInterval(setSway, 500, i);



//transitions

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
}

//third

function addBoost(objects, i){
    setTimeout(function () { objects[i].style.display = "block";}, 1000*i);
}

function removeBoost(objects, k){
    setTimeout(function () { objects[k].style.display = "none";}, 2000-(k*1000));
}

function boost(x) { //put in a class "boost_"
    console.log("started boost");
    var boost = x;

    for (var i = 0; i < 3; i++) {
        console.log(i);
       addBoost(boost, i);
    }
}

function subBoost(x) {
    console.log("started sub boost");
    var boost = x;

    for (var k = 2; k > -1; k--) {
        console.log(k);
        removeBoost(boost, k);
    }
}

function altBoost(x) {
    var boosts = document.getElementsByClassName(x);

    setInterval(boost, 3000, boosts);
    setInterval(subBoost, 6000, boosts);
}