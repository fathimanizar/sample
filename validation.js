        var email=document.getElementById("email");
        var pswd=document.getElementById("pswd");

        function validate()
        {
            if(email.value=='' || pswd.value=='')
            {
                alert("fields cannot be empty");
                return false;
            }
            else
            {
                return true;
            }

        }