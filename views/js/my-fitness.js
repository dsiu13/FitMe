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

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById('myBtn3');
var span3 = document.getElementsByClassName('close3')[0];


var calEaten = document.getElementById("calInput").value;
var foodEaten = document.getElementById("calInput1").value;

var calBurned1 = document.getElementById("formBurned").value;
var exercises = document.getElementById("formBurned1").value;

// var calBurn = $("#formBurned").val().trim();


 // var currentUser = "chris";

 // var gainedCalories = [];
 var gainedCalories = [].reduce(add, 0);
 function add(a, b) {
   return a + b;
 }
 

 var lostCalories = [];


var calEaten = document.getElementById("calInput").value;
var calBurn = $("#formBurned").val().trim();
var total = document.getElementById('numberDiv');


//on click adds numbers to total

$("#myBtn").on('click', function(){
    var getNumber = $("input.calEaten").val().trim();
    var total = parseInt(getNumber);
    console.log(total);
    // gainedCalories.(total);
    $(".totalGain").html(total);
});


$("#myBtn").on("click", function(){
    var foodname = $("input.foodEaten").val().trim();
    console.log(foodname);
  $.get("/api/dashboard/food/findOne/"+foodname, function(data) {
    var foodData = data[0].FoodCalorieGain;
    console.log(foodData);
    $(".totalGain").html(foodData);

    // foodData = calories;
    // }).then(function() {
    // $.post("/api/dashboard/user/caloriesIn/"+calories, function(data) {
    //     console.log(data);
    });
    // });  

    // $(".totalGain").html(foodData);
  });
   
   

$("#myBtn2").on('click', function(){

    var start = [];
    var getNumber = $("input.calBurned1").val().trim();
    console.log(getNumber);
    var total = parseInt(getNumber);
    start = start + total;
    $(".totalLost").html(start);
    console.log(start);
});


$("#myBtn2").on("click", function(){
    // console.log("Button Click");
    var exerciseName = $("input.exercises").val().trim();
    console.log(exerciseName);
    $.get("/api/dashboard/exercise/findOne/"+exerciseName, function(data) {
    var exerciseData = data[0].ExerciseCaloriesLost;
    $(".totalLost").html(exerciseData);
    })
}); 

function getFood(foodname, res) {
    $.get("/api/dashboard/food/findOne/", function(data) {
      console.log(data);
});
}; 

function sumTotal() {
    gainedCalories - lostCalories;
}   

var addDiv = $(".totalGain").value;
var subDiv = $(".totallost").value;

$("#myBtn3").on('click', function(){
   var closeOut = addDiv - subDiv;
   $(".actualTotal").append(closeOut);
   console.log(closeOut);

})

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
