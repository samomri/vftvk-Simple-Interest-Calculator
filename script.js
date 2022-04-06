function compute()
{
    //Input varialbles

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var year = new Date().getFullYear()+parseInt(years);//Actual year to be displayed converted from the number of years value

    //Result calculation

    var intrest = principal * years * rate /100;

    //Principal value validation

    if(principal <=0){
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return false
    }

    //Result display

    var result = document.getElementById('result');
    result.innerHTML = "\<br\>If you deposit <strong>" + principal + "</strong>,\<br\>at an interest rate of <strong>" + rate + "%</strong>\<br\>You will receive an amount of <strong>" + intrest + "</strong>,\<br\>in the year <strong>" + year + "</strong>\<br\>"   
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}       