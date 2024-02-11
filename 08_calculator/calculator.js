const add = function(number1, number2) 
{
    return number1 + number2;
	
};

const subtract = function(number1, number2) 
{
    return number1 - number2;
	
};

const sum = function(array) 
{
    let result = 0;

    for(let i = 0; i < array.length; i++)
    {
        result += array[i];
    }
    return result;
};

const multiply = function(array) 
{
    let result = array[0];

    for(let i = 1; i < array.length; i++)
    {
        result *= array[i];
    }
    return result;

};

const power = function(number1, number2) 
{
    let result = 1;

    for(let i = 1; i <= number2; i++)
    {
        result *= number1;
    }
	return result;
};

const factorial = function(number) 
{
    let result = 1;
    for(let i = number; i > 0; i--)
    {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
