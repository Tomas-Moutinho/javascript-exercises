const findTheOldest = function(peopleArray)
{
    let olderIndex = 0;
    let olderAge = 0;
    let ageArray = [];

    for(let i = 0; i < peopleArray.length; i++)
    {
        if(peopleArray[i].yearOfDeath == undefined)
        {
            ageArray[i] = 2024 - peopleArray[i].yearOfBirth;
        }
        else
        {
            ageArray[i] = peopleArray[i].yearOfDeath - peopleArray[i].yearOfBirth;
        }

        if(ageArray[i] > olderAge)
        {
            olderAge = ageArray[i];
            olderIndex = i;
        }
    }
    return peopleArray[olderIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
