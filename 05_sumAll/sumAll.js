const sumAll = function(number1, number2) 
{
    if(!Number.isInteger(number1) || !Number.isInteger(number2) || number1 < 0 || number2 < 0)
    {
        return 'ERROR';
    }

    let result = 0;
    let max = number2;
    let min = number1;

    if(number1 > number2)
    {
        max = number1;
        min = number2;
    }

    for(let i = min; i <= max; i++)
    {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
