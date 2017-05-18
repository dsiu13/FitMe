function main() {
	var main = $('.main').hide();
	$('.main').fadeIn(2000);
	
};
$(document).ready(main);


$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
});


$(document).mouseup(function (e)
{
    var container = $(".login");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0)
    {
        container.hide();
       
    }
});

$("#regForm").on('click', function(){
    document.load('../layouts/signup.hbs')
});


