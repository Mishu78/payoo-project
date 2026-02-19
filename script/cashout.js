document.getElementById("cashout-btn").addEventListener("click",function(){
    //1.get the agent number & validate to digit 11 digit
    //2.get the amount,validate,convert to number
    //3.get current balance,validate,convert to number
    //4.calculate new balance
    //5.get the pin and verify
    //5-1.true:show an alert>set balance
    //5-2-false:show an error alert >return

    //1.
    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber=cashoutNumberInput.value;
    console.log(cashoutNumber);

    //2.
    const cashoutAmountInput=document.getElementById("cashout-amount");
    const cashoutAmount=cashoutAmountInput.value;
    console.log(cashoutAmount);
})

