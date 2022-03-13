window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const RegisUsername = urlParams.get("username")
const RegisPassword = urlParams.get("password")

var LOGUsername = document.forms["myLogin"]["username"];
var LOGPassword = document.forms["myLogin"]["password"];

Result = true;
var Error2 = "" 
if(LOGUsername.value != RegisUsername){
	Error2 += "Wrong Username"
	Result = false;
	alert(Error2);
	return Result;
}
else if(LOGPassword.value != RegisPassword){
	Error2 += "Wrong Password"
	Result = false;
	alert(Error2);
	return Result;
}
else if(Result == true){
	Error2 += "Welcome!"
	alert(Error2)
	return Result;
}
// return Result;
// alert(Result);
}

			