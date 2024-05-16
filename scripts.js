const pulls = document.getElementById('pulls').value;
const odds = document.getElementById('odds').value;
const natural = /^(0|[1-9]\d*)$/;
const float = /^(0|[1-9]\d*)(\.\d+)?$/;
let pP = false;
let pO = false; 
let chance = 0;

function checkOdds(value)
{
    if ((value.match(natural)) || (value.match(float)))
    {
        return true;
    }
    else
    {
        alert('please enter a number for odds');
        return false;
    }
}

function checkPulls(value)
{
    if (value.match(natural))
    {
        return true;
    }
    else 
    {
        alert('please enter a whole number for pulls');
        return false;
    }
}

function calcOdds(pulls, odds)
{
    // W = 1 - ((1-p)^n)
    let decimalInput = odds*0.01;
    let theta = (1 - decimalInput);
    let complement = Math.pow(theta, pulls);
    let chance = 1 - complement;
    let chancePercent = chance*100;
    chancePercent = Math.round(chancePercent*100) / 100;
    let string = 'You have a ' + chancePercent + '%' + ' chance in ' + pulls + ' pulls to get what you want with ' + odds + '% odds.';
    document.getElementById('print').innerHTML = string;
}


function submitForm()
{
    let pP = checkOdds(odds);
    let pO = checkPulls(pulls);
    if ((pO) && (pP))
    {
        calcOdds(pulls, odds);
    }
}