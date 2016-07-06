//JS File
console.log("Hello, World");
function add(x,y){
console.log(x + y);
}


//Array
var classmates = ["Matt", "Tara", "Danyel", "Evan"];
for(var j = 0; j < classmates.length; j++){
	console.log(classmates[j]);
}

//OR//

for(var i in classmates){
	console.log(classmates[i]);
}

var typesOfSoda = new Array();
typesOfSoda [0] = "Red Cream Soda";
typesOfSoda [1] = "IBC";

console.log(typesOfSoda);
console.log(classmates);

var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];

//    Create an array of about 10 random numbers. Find a way to check to see if another random 
//    number is in that array.
//    var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];//

//var Array =[4, 8, 15, 16, 23, 42, 63, 21, 12, 74];

/*var favoriteMovies = ["Fargo","Grand Budapest Hotel","Pan's Labyrinth","Spirited Away"];
for(var movie in favoriteMovies){
	console.log(favoriteMovies [movie]);
}(var i=0; i<favoriteMovies.length;i++){
	console.log(i)
}
for*/

/******************DON'T GO ABOVE THIS LINE RIGHT NOW**********************/
/************************HERE BE MONSTERS**********************************/

//OBJECT LITERAL
var friend = {
	//Properties
	fullname			: "",
	age					: 0,
	married				: true,
	printVocation		: "",
	closeLikeABrother	: true,
	yearsKnown			: 0,
	knowNoStrangerMem	: true,
	livesInIndy			: true 


	//Method
	/*printVocation	: function(){
		return this.vocation;
	},
	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABrother == true && this.married == false)
	} else {
		return "Have you tried Tinder?";
	}, */
	
	inviteToDinner : function(){
		if(this.knowNoStrangerMem == true && this.livesInIndy == true){
		return "See you at The Eagle!"
		function  }
	}


var saraNowlin = Object.create(friend);
saraNowlin.fullname = "Sara Nowlin";
saraNowlin.age = 30;
saraNowlin.married = false;
saraNowlin.vocation = "Body image therapist";
saraNowlin.yearsKnown = 8;
saraNowlin.closeLikeABrother = true;
saraNowlin.knowNoStrangerMem = false;

var ryanFelton = Object.create(friend);
ryanFelton.fullname = "Ryan Felton";
ryanFelton.age = 28;
ryanFelton.married = false;
ryanFelton.vocation = "Copywriter at Sales Force";
ryanFelton.yearsKnown = 2;
ryanFelton.closeLikeABrother = false;
ryanFelton.knowNoStrangerMem = true;

var emilyRoberts = Object.create(friend);
emilyRoberts.fullname = "Emily Roberts";
emilyRoberts.age = 29;
emilyRoberts.married = false;
emilyRoberts.vocation = "Teacher"
emilyRoberts.yearsKnown = 11;
emilyRoberts.closeLikeABrother = true;
emilyRoberts.knowNoStrangerMem = false;

var brandonSchaaf = Object.create(friend);
brandonSchaaf.fullname = "Brandon Schaaf"
brandonSchaaf.age = 27;
brandonSchaaf.married = true;
brandonSchaaf.vocation = "Illustrator";
brandonSchaaf.yearsKnown = 2;
brandonSchaaf.closeLikeABrother = true;
brandonSchaaf.knowNoStrangerMem = true;

var meganHart = Object.create(friend);
meganHart.fullname = "Megan Hart";
meganHart.age = 28;
meganHart.married = true;
meganHart.vocation = "Artist"
meganHart.yearsKnown = 10;
meganHart.closeLikeABrother = true;
meganHart.knowNoStrangerMem = true;



