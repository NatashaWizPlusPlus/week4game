//Few Globals
var wins = 0;
var losses = 0;
var count;
var randomNum;
var randomDiamond1;
var randomDiamond2;
var randomDiamond3;
var randomDiamond4;



	// var x = document.getElementById
$(".btn").on("click", function(){
	var randomNum = Math.floor((Math.random)() * 101 + 19);
	$("#gem").html(String(randomNum));
	$("#diamond1").css("pointer-events","all");
	$("#diamond2").css("pointer-events","all");
	$("#diamond3").css("pointer-events","all");
	$("#diamond4").css("pointer-events","all");
});


// function reset(){
// $('#gem').reset();
// $('#diamond1').reset();
// $('#diamond2').reset();
// $('#diamond3').reset();
// $('#diamond4').reset();
// }
	
function reset(){
	//reset all HTML elements changed by jquery back to their original values
	//This will reset the first diamond
	$("#diamond1").css("pointer-events","none");
	$("#diamond1").html("<img src=\"assets/images/1diamond.jpg\" width=\"100px\" height=\"100px\" alt=\"\">");	
	//This will reset the second diamond
	$("#diamond2").css("pointer-events","none");
	$("#diamond2").html("<img src=\"assets/images/2diamond.jpg\" width=\"100px\" height=\"100px\" alt=\"\">");
	//This will reset the third diamond
	$("#diamond3").css("pointer-events","none");
	$("#diamond3").html("<img src=\"assets/images/3diamond.jpg\" width=\"100px\" height=\"100px\" alt=\"\">");
	//This will reset the fourth diamond
	$("#diamond4").css("pointer-events","none");
	$("#diamond4").html("<img src=\"assets/images/4diamond.jpg\" width=\"100px\" height=\"100px\" alt=\"\">");

	}
	//After the gem number is generated the diamonds can be clicked

	//Each diamond has a value that calculates to add up to the gemNumber
function randomDiamondNumber(){
	return Math.floor((Math.random)() * 12 + 1);
	reset();
}

//Creating the diamonds with the random numbers
$('#diamond1').click( function() {
  alert(randomDiamond1 = randomDiamondNumber());
} );
$('#diamond2').click( function() {
  alert(randomDiamond2 = randomDiamondNumber());
} );
$('#diamond3').click( function() {
  alert(randomDiamond3 = randomDiamondNumber());
} );
$('#diamond4').click( function() {
  alert(randomDiamond4 = randomDiamondNumber());
} );

// $("#diamond1").one("click", function(){
// 		randomDiamond1 = randomDiamondNumber(); 
// 		$("#diamond1").html(randomDiamond1);

// 	});

// $("#diamond2").one("click", function(){
// 		randomDiamond2 = randomDiamondNumber(); 
// 		$("#diamond2").html(String(randomDiamond2));
// 	});

// $("#diamond3").one("click", function(){
// 		randomDiamond3 = randomDiamondNumber(); 
// 		$("#diamond3").html(String(randomDiamond3));
// 	});

// $("#diamond4").one("click", function(){
// 		randomDiamond4 = randomDiamondNumber(); 
// 		$("#diamond4").html(String(randomDiamond4));
// 	});


	if (gemNumber === randomDiamond1 + randomDiamond2 + randomDiamond3 + randomDiamond4){
		
		alert("You Win!");
		$("#badge1").html(String(wins++));

		reset();
		
	
}
	else{
			alert("You Loose!");
			$("#badge2").html(String(losses++));

			reset();
		}

$("#gem").trigger('reset')		




