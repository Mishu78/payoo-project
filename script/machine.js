console.log("machine array");

//machine id=> input value

function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}

//machine call --> balance give as output
function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log("current balance");
    return Number(balance);
}

//machine value --> set balance
function setBalance(value){
    const balanceElement=document.getElementById("balance");
    balanceElement.innerText=value;
}