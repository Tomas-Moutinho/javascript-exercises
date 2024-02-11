const fibonacci = function(index) 
{
    index = parseInt(index);
    if(index < 0)
    {
        return 'OOPS';
    }

    if(index == 0)
    {
        return 0;
    }

    const array = [];
    array[0] = 1;
    array[1] = 1;
    array[2] = 2;
    for(let i = 3; i < 25; i++)
    {
        array[i] = array[i - 1] + array[i - 2];
    }

    return array[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
