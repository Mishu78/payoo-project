console.log("login functionality");

//login button work
document.getElementById("login-btn").addEventListener("click",function(){

    //1.get the mobile number
    //2.get the pin
    //3.match pin and mobile number
    //3-1.true:::>>alert>homepage
    //3-2.false:::>alert>return
    //console.log("login button clicked");

    //1
    const inputNumber=document.getElementById("input-number");
    const contactNumber=inputNumber.value;
    console.log(contactNumber);
    //2
    const inputPin=document.getElementById("input-pin");
    const contactPin=inputPin.value;
    console.log(contactPin);
    //3
    if(contactNumber == "01234567890" && contactPin == "1234"){
  alert("login Successful");
  //window.location.replace("./home.html")
  window.location.assign("./home.html");
    }else{
        alert("login failed");
        return;
    }
})