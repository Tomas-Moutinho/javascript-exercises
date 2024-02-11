const getTheTitles = function(booksArray) 
{
    let booksTitleArray = [];

    for(let i = 0; i < booksArray.length; i++)
    {
        booksTitleArray[i] = booksArray[i].title;
    }
    return booksTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
