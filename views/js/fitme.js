function main() {
	var main = $('.main').hide();
	$('.main').fadeIn(2000);
	
};
$(document).ready(main);

var ExerciseContainer = $(".exercise-container");
var FoodContainer = $(".food-container");
var exercises;

$('input[type="submit"]').mousedown(function(){
 // $(this).css('background', '#ffb74d');
});
$('input[type="submit"]').mouseup(function(){
 // $(this).css('background', '#ffb74d');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
 // $(this).toggleClass('green');
});



$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0)
    {
        container.hide();
        $('#loginform').removeClass('green');
    }
});

function getExercises() {
    $.get("/api/dashboard", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createExerciseRow(data[i]));
      }
      renderExerciseList(rowsToAdd);
      nameInput.val("");
    });
}

function renderExercises(rows) {
    ExerciseList.children().not(":last").remove();
    ExerciseContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      ExerciseList.prepend(rows);
    }
    else {
      renderEmpty();
    }
} 