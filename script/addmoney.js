document.getElementById("add-money-btn").addEventListener("click",function(){
    //1.get the bank account
    const bankAccount=getValueFromInput("add-money-bank");
    if(bankAccount === "select a bank"){
        alert("please select a bank");
        return;
    }
    //2.get bank account number
    const accountNumber=getValueFromInput("add-money-number");
    if(accountNumber.length!==11){
        alert("invalid account number");
        return;
    }
    //3.get amount
    const amount = getValueFromInput("add-money-amount");
    const newbalance=getBalance()+Number(amount);

    const pin =getValueFromInput("add-money-pin");
    if(pin==="1234"){
        alert("add money success");
        setBalance(newbalance);
    }
    else{
        alert("invalid pin");
    }
   
});