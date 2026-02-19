document.getElementById("cashout-btn").addEventListener("click",function(){
    const cashoutNumber=getValueFromInput("cashout-number");
    console.log(cashoutNumber);

    const cashoutAmount=getValueFromInput("cashout-amount");

    const cashoutPin=getValueFromInput("cashout-pin");
    })


// document.getElementById("cashout-btn").addEventListener("click",function(){
//     //1.get the agent number & validate to digit 11 digit
//     //2.get the amount,validate,convert to number
//     //3.get current balance,validate,convert to number
//     //4.calculate new balance
//     //5.get the pin and verify
//     //5-1.true:show an alert>set balance
//     //5-2-false:show an error alert >return

//     //1.
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashoutNumberInput.value;
//     console.log(cashoutNumber);
//      //validation check
//      if(cashoutNumber.length!=11){
//         alert("invalid agent number");
//         return;
//      }
//     //2.
//     const cashoutAmountInput=document.getElementById("cashout-amount");
//     const cashoutAmount=cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     //3.
//     const balanceElement=document.getElementById('balance'); 
//     const balance=balanceElement.innerText;
//     console.log(balance);
//     //4.calculate new balance
//     const newBalance=Number(balance)-Number(cashoutAmount);
//     if(newBalance<0){
//         alert("invalid amount");
//         return;
//     }
    

//      const cashoutPinInput= document.getElementById("cashout-pin");
//      const cashoutPin=cashoutPinInput.value;
//      if(cashoutPin === "1234"){
//         alert("cashout successful");
//         console.log("New Balance",newBalance);
//         balanceElement.innerText=newBalance;
//      }else{
//         alert("pin invalid");
//         return;
//      }

// })

