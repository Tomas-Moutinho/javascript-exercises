const repeatString = function(str, number) 
{
    let temp = '';
    let result = '';
    if(number == 1)
    {
        return str;
    }
    else if(number < 0)
    {
        return 'ERROR';
    }
    for(let i = 1; i <= number - 1; i++)
    {
        temp += str;
        result = temp + str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
