<script
	src="https://code.jquery.com/jquery-3.2.1.js"
	integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
	crossorigin="anonymous"></script><script type="text/javascript">
		$(document).ready(function () {

 $("button").on("click", userInput)
 
 
	function userInput() {
		var userName =  $("#userName")
		console.log($("#userName").val() );
		
		 var error = "";
	var illegalChars = /\W/; // allow letters, numbers, and underscores
	
		if (userName.val() == "")  {
				document.getElementById("userName").style.background = 'Pink';
				 error = "You didn't enter a username.\n";
			 var errorTag = document.createElement("H5");
				errorTag.innerHTML = error;
				 document.getElementById("error-prompt").appendChild(errorTag);
				return false;
 
		} else if ((userName.val().length < 5) || (userName.val().length > 15)) {
					document.getElementById("userName").style.background = 'Pink';
				 error = "The username is the wrong length.\n";
				 var errorTag = document.createElement("H5")
				 errorTag.innerHTML = error;
				 document.getElementById("error-prompt").appendChild(errorTag);
		return false;
 
		} else if (illegalChars.test(userName.val())) {
				document.getElementById("userName").style.background = 'Pink';
				error = "The username contains illegal characters.\n";
				var errorTag = document.createElement("H5");
				errorTag.innerHTML = error;
				document.getElementById("error-prompt").appendChild(errorTag);
				return false;
 
		 } else {
				 document.getElementById("userName").style.background = 'White';
		}
		return true;
 }
	});
	
	</script>

</script>