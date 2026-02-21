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
    const currentBalance=getBalance();
    const newbalance=currentBalance+Number(amount);

    const pin =getValueFromInput("add-money-pin");
    if(pin==="1234"){
        alert(`add money success from ${bankAccount} at ${new Date()}`);
        setBalance(newbalance);
        //1.history containerk dhore niye ashbo
        const history=document.getElementById("history-container");
        //2.new div create korbo
        const newHistory=document.createElement("div");
        //3.new div-> innerHtml add krobo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
         add money success from ${bankAccount}, account number ${accountNumber} at ${new Date()}
        </div>
        `;
        //4.history container e new div append korbo
        history.append(newHistory);
    }
    else{
        alert("invalid pin");
        return;
    }
   
});