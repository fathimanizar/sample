var email=document.getElementById("email");
var error=document.getElementById("error");

        function validate()
        {
           let regexp =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
            if(regexp.test(email.value)){
                error.innerHTML="Valid email ID";
                error.style.color="green";
                return true;
              }
           else{
            error.innerHTML="Invalid email ID";
            error.style.color="red";
            return false;
           }

        } 