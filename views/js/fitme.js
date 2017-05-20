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


    
    // $(document).on("submit", "#loginform", signInForm);
    //     function updateUsers(){
    //         $.get("/api/dashboard/user/postUser", function(){
    //             console.log("signin", data);
    //             signin = data;
    //         })
    //     }

    //     function signInForm(){
    //         console.log("on click sub works")
       
    //    event.preventDefault();
    //      var signin = {
    //      UserName: $("input.UserName").val().trim(),
    //      Password: $("input.pw").val().trim()
    //         }
           
    //     $.post("/signin", signin, function(req, res) {
    //     }) 
 
        
    // };
