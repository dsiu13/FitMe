$(document).on("submit", "#signup", signUpForm);

        function updateUsers(){
            $.get("/api/dashboard/user/postUser", function(){
                console.log("signup", data);
                signup = data;
            })
        }
        function signUpForm(){
            console.log("on click sub works")
       
       event.preventDefault();
         var signup = {
         UserName: $("input.UserName").val().trim(),
         Password: $("input.pw").val().trim(),
         height: $("input.height").val().trim(),
         cWeight: $("input.cWeight").val().trim(),
         gWeight: $("input.gWeight").val().trim()
         }

        console.log(signup);
        $.post("/signup", signup, function(req, res) {
       	}) 
 
        
    };
