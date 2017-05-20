//special effect to load page

function main() {
	var main = $(".main").hide();
	$(".main").fadeIn(2000);
	
};
$(document).ready(main);

//code that takes in values from forms


var total = document.getElementById('numberDiv');

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];


var calEaten = document.getElementById("calInput").value;
var foodEaten = document.getElementById("calInput1").value;

var calBurned = document.getElementById("formBurned").value;
var exercises = document.getElementById("formBurned1").value;

var calBurn = $("#formBurned").val().trim();


 var currentUser = "chris";

 var calories = [];

//on click adds numbers to total

$("#myBtn").on('click', function(){

    var start = [];
    var getNumber = $("input.calEaten").val().trim();
    var total = parseInt(getNumber);
    start = start + total;
    $(".totalGain").html(start);
    console.log(start);
});


$("#myBtn").on("click", function(){
    var foodname = $("input.foodEaten").val().trim();
    console.log(foodname);
  $.get("/api/dashboard/food/findOne/"+foodname, function(data) {
    var foodData = data[0].FoodCalorieGain;
    console.log(foodData);
    $(".totalGain").html(foodData);
    foodData = calories;
    }).then(function() {
    $.post("/api/dashboard/user/caloriesIn/"+calories, function(data) {
        console.log(data);
    });
    });  

    // $(".totalGain").html(foodData);
  });
   
   

$("#myBtn2").on('click', function(){

    var start = [];
    var getNumber = $("input.calBurned").val().trim();
    console.log(getNumber);
    var total = parseInt(getNumber);
    start = start + total;
    $(".totalLost").html(start);
    console.log(start);
});


// $("#myBtn2").on("click", function(){
//     // console.log("Button Click");
//     var foodname = $("input.foodEaten").val().trim();
//     console.log(foodname);
//     $.get("/api/dashboard/food/findOne/"+foodname, function(data) {
//     var foodData = data[0].FoodCalorieGain;
//     }).then(function(){
//         $.put("/api/dashboard/user/caloriesIn/"+currentUser, function(data) {
//             console.log(data);
//             $(".totalGain").html(data);
//         })
//     })
// }); 

function getFood(foodname, res) {
    $.get("/api/dashboard/food/findOne/", function(data) {
      console.log(data);
});
};    


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
};

  

