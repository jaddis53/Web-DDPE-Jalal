let firstName = document.getElementById("name");
let age = document.getElementById("age");
let pass = document.getElementById("pswd");
let btn = document.getElementById("submit");

btn.addEventListener("click",()=>{
    if(firstName.value!="" && age.value!="" && pass.value!="") {
    var cookie_Name = "firstName" + "=" + encodeURIComponent(firstName.value);
    var cookieAge="Age" + "=" + encodeURIComponent(age.value) + 2*24*60*60;
    var cookiePass="Password"+ "=" +encodeURIComponent(pass.value);
    document.cookie = cookie_Name;
    document.cookie = cookieAge;
    document.cookie = cookiePass;
    
    }
    else {
        alert("insert values");
    }

});