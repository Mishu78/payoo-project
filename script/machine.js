console.log("machine array");

//machine id=> input value

function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value; //to use it another place we must have to return it.
}

//machine call --> balance give as output
function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText; //particular element theke element nile innerText
    //input field theke nile value use korte hobe.
    console.log("current balance",Number(balance));
    return Number(balance);
}

//machine value --> set balance
function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}