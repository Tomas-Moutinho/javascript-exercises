const leapYears = function(year_number) 
{
    if(year_number % 4 == 0)
    {
        if(year_number % 100 == 0)
        {
            if(year_number % 400 == 0)
            {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
