window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var firstname1 = document.forms["myForm"]["firstname"];
    var lastname1 = document.forms["myForm"]["lastname"];
    var Gender = document.forms["myForm"]["gender"];
    var Bday = document.forms["myForm"]["bday"];
    var Email = document.forms["myForm"]["email"];
    var Username = document.forms["myForm"]["username"];
    var Password = document.forms["myForm"]["password"];
    var require = document.getElementById("errormsg");
    
    var Error1 = true;
    require.innerHTML = "";
    if(firstname1.value == ""){
        require.innerHTML += "*You to input your Firstname*";
        Error1 = false;
    }
    if(lastname1.value == ""){
        require.innerHTML += "*You to input your Lastname*";
        Error1 = false;
    }
    if(Gender.value == ""){
        require.innerHTML += "*You to input your Gender*";
        Error1 = false;
    }
    if(Bday.value == ""){
        require.innerHTML += "*You to input your Birthday*";
        Error1 = false;
    }
    if(Email.value == ""){
        require.innerHTML += "*You to input your Email*";
        Error1 = false;
    }
    if(Username.value == ""){
        require.innerHTML += "*You to input your Username*";
        Error1 = false;
    }
    if(Password[0].value != Password[1].value){
        require.innerHTML += "*You need to use the same password*";
        Error1 = false;
    }
    return Error1;

}