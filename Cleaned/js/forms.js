 function checkPass() {
                var pass1 = document.getElementById('pass1');
                var pass2 = document.getElementById('pass2');
                var message = document.getElementById('message'); 
                var goodColor = "#66cc66";
                var badColor = "#ff6666";

                if (pass1.value.length < 8) {
                    pass1.style.backgroundColor = badColor;
                    pass2.style.backgroundColor = badColor;
                    message.style.color = badColor;
                    message.innerHTML = "Password must be 8 - 32 characters long."
                }

                else if ((pass1.value.length >= 8) && (pass1.value == pass2.value)) {
                    pass1.style.backgroundColor = null;
                    pass2.style.backgroundColor = goodColor;
                    message.style.color = goodColor;
                    message.innerHTML = "Passwords Match"
                }

               else {
                    pass1.style.backgroundColor = null;
                    pass2.style.backgroundColor = badColor;
                    message.style.color = badColor;
                    message.innerHTML = "Passwords Do Not Match!"
                }
}


function Validate(txt) {
                txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}


function phone_validate(phone)  {  
    var Phone = /^[+]?6?01\d{8,9}$/;

      		    if (Phone.test(phone) == false) {
                    document.getElementById("status1").innerHTML = "<span class='warning'>Phone number is not valid yet.</span>";
      		    }
      		    else {
      		        document.getElementById("status1").innerHTML = "<span> </span>";
      		    }
} 

 
function email_validate(email) {
                var Mail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

                if (Mail.test(email) == false) {
                    document.getElementById("status2").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
                }
                else {
                    document.getElementById("status2").innerHTML = "<span> </span>";
                }
}


$(document).ready(function () {

    $('#addr2').hide();

    $('input[type="radio"]').click(function () {
        if ($(this).attr('id') == 'alter') {
            $('#addr2').show();
        }

        else {
            $('#addr2').hide();
        }
    });
});


$(document).ready(function () {
    $('#card').hide();

    $('input[type="radio"]').click(function () {
        if ($(this).attr('id') == 'credit') {
            $('#card').show();
        }

        else {
            $('#card').hide();
        }
    });
});


$(document).ready(function () {
    $('#feedbacks').hide();
 
    $('#feedback').click(function () {
        
            $('#feedbacks').show();
            $('#messages').hide();

    $('#others').click(function ()  {
                $('#feedbacks').hide();
                $('#messages').show();
            
         });
    });
});


$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});
