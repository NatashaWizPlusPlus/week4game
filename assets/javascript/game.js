//Few Globals
var wins = 0;
var losses = 0;
var randomNum;
var randomDiamond1;
var randomDiamond2;
var randomDiamond3;
var randomDiamond4;


	// var x = document.getElementById
	$(".btn").on("click", function(){
		var randomNum = Math.floor((Math.random)() * 120 + 1);
		$("#gem").html(String(randomNum));
	});
	

	//After the gem number is generated the diamonds can be clicked

	//Each diamond has a value that calculates to add up to the gemNumber
function randomDiamondNumber(){
	return Math.floor((Math.random)() * 12 + 1);
}


$("#diamond1").on("click", function(){
		randomDiamond1 = randomDiamondNumber(); 
		$("#diamond1").html(randomDiamond1);
	});

$("#diamond2").on("click", function(){
		randomDiamond2 = randomDiamondNumber(); 
		$("#diamond2").html(String(randomDiamond2));
	});

$("#diamond3").on("click", function(){
		randomDiamond3 = randomDiamondNumber(); 
		$("#diamond3").html(String(randomDiamond3));
	});

$("#diamond4").on("click", function(){
		randomDiamond4 = randomDiamondNumber(); 
		$("#diamond4").html(String(randomDiamond4));
	});

function calculatedWins(){
	if (randomNum === randomDiamond1 + randomDiamond2 + randomDiamond3 + randomDiamond4 === randomNum){
		
		$(".badge1").html(String(wins));
		wins++
	
	}
	else{
		$(".badge2").html(String(losses));
		losses++
	}
}
