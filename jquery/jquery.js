$(document).ready(function(){
	
	alert("Hey");

	$("#hide").click(function(){
		$("#image").hide();
	});
$("#show").click(function(){
		$("#image").show();
	});
$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});
$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 2000);
	});
$("#jiggle").click(function(){
	$("#image").slideUp(
		{height:'500',
		width:'-=50%',
		width:'50%',
		});
})


});
