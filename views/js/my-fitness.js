//special effect to load page

function main() {
	var main = $(".main").hide();
	$(".main").fadeIn(2000);
	
};
$(document).ready(main);

//code that takes in values from forms

var calEaten = document.getElementById("calInput").value;
var calBurn = $("#formBurned").val().trim();
var total = document.getElementById('total');

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];



$("#myBtn").on("click", function(){
	console.log("Button Click");
	var caleaten = $("input.calEaten").val().trim();
	if (caleaten > 0) {
	console.log(caleaten);
    $( ".total1" ).html(caleaten);
  }
})

$("#myBtn").on("click", function(){
    console.log("Button Click");
    // var foodEat = $("input.calEaten");
    // var caleaten = $("input.calEaten").val().trim();
    // if (caleaten > 0) {
    // console.log(caleaten);
    getFood(CHEESE);

    // $( ".total1" ).html(caleaten);
  // }
})

function getFood(foodname) {
    var foodString = foodname || "";
    if (foodString) {
      foodString = "/findOne/" + foodString;
    }
    $.get("/api/dashboard/food/" + foodString, function(data) {
      console.log("Food", data);
    //   food = data;
    //   if (!food || !food.length) {
    //     displayEmpty();
    //   }
    //   else {
    //     initializeRows();
    //   }
    });
}


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



