let temp1= document.getElementById("bill-input");
temp1.addEventListener("input",() => {
    let bill = document.getElementById("bill-input").value;
    let kip = document.getElementById("tip-input").value;
    let people = document.getElementById("ppl-input").value;

    let tipFinal = parseInt(bill*kip/100);
    let totalFinal = parseInt(bill)+tipFinal;

    document.getElementById("tip-op").value = tipFinal/people;
    document.getElementById("person-out").value = totalFinal/people;
});

let temp2= document.getElementById("tip-input");
temp2.addEventListener("input",() => {
    let bill = document.getElementById("bill-input").value;
    let kip = document.getElementById("tip-input").value;
    let people = document.getElementById("ppl-input").value;

    let tipFinal = parseInt(bill*kip/100);
    let totalFinal = parseInt(bill)+tipFinal;

    document.getElementById("tip-op").value = tipFinal/people;
    document.getElementById("person-out").value = totalFinal/people;
});
let temp3= document.getElementById("ppl-input");
temp3.addEventListener("input",() => {
    let bill = document.getElementById("bill-input").value;
    let kip = document.getElementById("tip-input").value;
    let people = document.getElementById("ppl-input").value;

    let tipFinal = parseInt(bill*kip/100);
    let totalFinal = parseInt(bill)+tipFinal;

    document.getElementById("tip-op").value = tipFinal/people;
    document.getElementById("person-out").value = totalFinal/people;
});



function tipIncrementHandler(){
    let temp = document.getElementById("tip-input").value;
    temp++;
    document.getElementById("tip-input").value = temp;
    myFunc();
}
function tipDecrementHandler(){
    let temp = document.getElementById("tip-input").value;
    if(temp <= 0){
        temp = 0;
    }
    else{
        temp--;
    }
    document.getElementById("tip-input").value = temp;
    myFunc();
}
function pplIncrementHandler(){
    let temp = document.getElementById("ppl-input").value;
    temp++;
    document.getElementById("ppl-input").value = temp;
    myFunc();
}
function ppldecrementHandler(){
    let temp = document.getElementById("ppl-input").value;
    if(temp <= 1){
        temp = 1;
    }
    else{
        temp--;
    }
    document.getElementById("ppl-input").value = temp;
    myFunc();
}

/*function to run on every input button click*/

function myFunc(){
    let bill = document.getElementById("bill-input").value;
    let kip = document.getElementById("tip-input").value;
    let people = document.getElementById("ppl-input").value;

    let tipFinal = parseInt(bill*kip/100);
    let totalFinal = parseInt(bill)+tipFinal;

    document.getElementById("tip-op").value = tipFinal/people;
    document.getElementById("person-out").value = totalFinal/people;
}