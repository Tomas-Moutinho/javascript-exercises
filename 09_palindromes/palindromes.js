const palindromes = function (str) 
{
    str = str.toLowerCase();
    str = str.replaceAll("!","");
    str = str.replaceAll(".","");
    str = str.replaceAll(" ","");
    str = str.replaceAll(",","");

    for(let i = 0; i < str.length; i++)
    {
        if(str.at(i) === str.at(str.length - i - 1))
        {
            continue;
        }
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
