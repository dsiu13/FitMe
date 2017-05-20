//special effect to load page

function main() {
	var main = $(".main").hide();
	$(".main").fadeIn(2000);
	
};
$(document).ready(main);

//code that takes in values from forms



var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById('myBtn3');
var span3 = document.getElementsByClassName('close3')[0];


var calEaten = document.getElementById("calInput").value;
var calBurn = $("#formBurned").val().trim();
var total = document.getElementById('numberDiv');

//on click adds numbers to total

$("#myBtn").on('click', function(){
    var start = [];
    var getNumber = $("input.calEaten").val().trim();
    var total = parseInt(getNumber);
    start = start + total;
    $(".total").html(start);
    console.log(start);
});





//button for adding calories


btn.onclick = function() {
	 
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
//button for subtracting calories

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}
//close out button

btn3.onclick = function() {
    modal3.style.display = 'block';
}

span3.onclick = function() {
    modal3.style.display ='none';
}
window.onclick = function(event) {
    if (event.target == modal3) {
        modal.style.display = 'none';
    }
}


function total() {
    
}




$(".numberDiv").
