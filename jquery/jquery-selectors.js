//$(document).ready(function(){

//})

$(function  () {
//alert("It's working")	
	//By idea - this adds a CSS class
$('#example-one').addClass('highlight');

//By class- we'll make two things change here.
$('.example-two').css("border", "4px solid gray");

//By element
$('h5').click(function(){
	$('h5').fadeToggle("slow","linear");
});

$('#draggable').draggable();

$('#id-combo-demo, .class-combo-demo').draggable();

$('li:contains("sad")').click(function(){
	$(this).hide()
})

})
