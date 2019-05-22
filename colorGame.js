
var numOfSquares = 6;

// var colors = generateRandomColors(numOfSquares);
var colors = [];
var h1 = document.querySelector("h1");
// var pickedColor = pickColor();
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// var game = {}

// game.init = function(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();	
// }

// game.init();

init();

function init(){
	// mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();

}


function setupModeButtons(){
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;	
		reset();
		})
	}
}


function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	// Add colors to squares
	// squares[i].style.backgroundColor = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickedColor){
			// alert("Correct");
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;

		}else{
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent = "Try Again"
 		}
	}) ;
}
}

// for(var i = 0; i< modeButtons.length; i++){
// 	modeButtons[i].addEventListener("click", function(){
// 	modeButtons[0].classList.remove("selected");
// 	modeButtons[1].classList.remove("selected");
// 	this.classList.add("selected");

// 	this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
// 	// if(this.textContent === Easy){
// 	// 	numOfSquares = 3;
// 	// } else{
// 	// 	numOfSquares = 6;
// 	// }

// 	reset();
// 	// how many squares to show
// 	// pick new colors
// 	// pick a new pickedColor
// 	// update page to reflect changes
// 	})
// }


function reset(){
	// generate all new colors
	colors = generateRandomColors(numOfSquares);

	// pick a new random color from array
	pickedColor = pickColor();

	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";

	messageDisplay.textContent = "";

	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}



// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(3);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(6);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
reset();

// 	// generate all new colors
// 	colors = generateRandomColors(numOfSquares);
// 	// pick a new random color from array
// 	pickedColor = pickColor();
// 	// change colorDisplay to match picked color
// 	colorDisplay.textContent = pickedColor;

// messageDisplay.textContent = "";

// 	// change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// }
// h1.style.backgroundColor = "steelblue";
// resetButton.textContent = "NEW COLORS";

})

// colorDisplay.textContent = pickedColor;


// for(var i = 0; i < squares.length; i++){
// 	// Add colors to squares
// 	// squares[i].style.backgroundColor = colors[i];

// 	//Add click listeners to squares
// 	squares[i].addEventListener("click", function(){
// 		// grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		// compare color to picked color
// 		if(clickedColor === pickedColor){
// 			// alert("Correct");
// 			messageDisplay.textContent = "Correct";
// 			resetButton.textContent = "Play Again?";
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = clickedColor;

// 		}else{
//  			this.style.backgroundColor = "#232323";
//  			messageDisplay.textContent = "Try Again"
//  		}
// 	}) ;
// }

function changeColors(color){
	// loop through all colors
	for(var i = 0; i < squares.length; i++){
		// change color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push it into array
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	return "rgb(" +r + ", " + g + ", " + b +")";
}














