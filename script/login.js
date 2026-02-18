console.log("login functionality");

//login button work
document.getElementById("login-btn").addEventListener("click",function(){
    //1.get the mobile number
    //2.get the pin
    //3.match pin and mobile number
    //3-1.true:::>>alert>homepage
    //3-2.false:::>alert>return
    //console.log("login button clicked");
    const inputNumber=document.getElementById("input-number");
    const contactNumber=inputNumber.value;
    console.log(contactNumber);

    const inputPin=document.getElementById("input-pin");
    const contactPin=inputPin.value;
    console.log(contactPin);

    if(contactNumber == "01234567890" && contactPin == "1234"){
  alert("login Successful");
    }else{
        alert("login failed");
        return;
    }
})