var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
var yyyf = today.getFullYear()+1;

if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}

var maxDay = yyyf+'-'+mm+'-'+dd;
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("min", today);
document.getElementById("date").setAttribute("max". today);

function validateForm() {
    var firstname = document.getElementById("Firstname").value;  
    var lastname = document.getElementById("Lastname").value; 
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
  

    var letters = /^[A-Za-z\s]+$/;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phno_val = /^\d{11,12}$/;

    if(firstname==''||contactNumber==''||email==''||lastname ==''){  
        alert('Enter each details correctly'); 
        return false;  
    }  
    else if(!letters.test(firstname)){  
        alert('Name is incorrect must contain alphabets only');   
        return false;  
    }
    else if(!letters.test(lastname)){  
        alert('Name is incorrect must contain alphabets only');   
        return false;  
    } 

    else if (!phno_val.test(contactNumber)){  
        alert('Invalid phone number please enter valid phone number:60123456789'); 
        return false;  
    }   
    else if (!email_val.test(email)){  
        alert('Invalid email format please enter valid email'); 
        return false;  
    }  
    else {
        alert('Booking successful , later will contact you');
        return true;
    }   
}