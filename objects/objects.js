
		alert("It's working.")
}

var friend = {
	firstName	: "Paul", 
	lastName	: "O'Connor",
	age			: 39
};
document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.firstName;

var houseOfCards = {
	showName :"House of Cards",
	epNumber : 1,
	epDesc : "Kevin Spacey talks creepily into the camera a lot."
}

document.getElementById("show-name").innerHTML = houseOfCards.showName;
document.getElementById("episode-number").innerHTML = houseOfCards.epNumber;
document.getElementById("episode-description").innerHTML = houseOfCards.epDesc;

var netflixShow = {
	//Properties
	showName : "",
	epNumber : 1,
	epDescription : ""

	watchNow	: function(){
	alert("You are now queueing up " + this.showName + " " +this.epNumber)
	}
}

var drWho = Object.create(netflixShow);
drWho.showName = "Dr. Who";
drWho.epNumber = 1;
drWho.epDesc = "Plastic comes alive.";

document.getElementById("show-name2").innerHTML = drWho.showName;
document.getElementById("episode-number2").innerHTML = drWho.epNumber;
document.getElementById("episode-description2").innerHTML = drWho.epDesc;
*/
var amazonPrimeShow = {
	showId		: 1,
	show 		:"Taradise",
	description :"Welcome to Taradise",
	seasonInfo	:{
		seasonNumber: 1,
	//METHODS
	printDetails : function(){
		document.write(description);
		
	},

	episodes 	: [
		{episodeNumber: 1, episodeName: "Taradise Now"},
		{episodeNumber: 2, episodeName: "Taradise Comes From Within"},
		{episodeNumber: 3, episodeName: "Tear It Up In Taradise"}

		]
	},
};


	document.write(amazonPrimeShow.seasonInfo.episodes[0].episodeName);
