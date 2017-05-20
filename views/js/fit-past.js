 $(document).ready(function(){
        $('.dropdown-toggle').dropdown()
    });

 function main() {
	var main = $('.main').hide();
	$('.main').fadeIn(1000);
	
};
$(document).ready(main);

var quotes = ["Your desire to change must be greater than your desire to stay the same.", 
"You will never know your limits unless you push yourself to them.", 
"You only regret the workouts you don’t do.", 
"There are no shortcuts to any place worth going. ", 
"The body achieves what the mind believes.", 
"Life has no remote. Get up and change it yourself. ", "A goal without a plan is just a wish.", 
"Do something today that your future self will thank you for.",];


var randomQuote = quotes[Math.floor(Math.random()* quotes.length)];

$(document).ready ( function(){
   	$(".quote").append('"' + randomQuote + '"');
})
