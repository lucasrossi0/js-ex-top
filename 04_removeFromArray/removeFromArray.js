const removeFromArray = function (arr, ...agr) 
{
    let temp = [];
    arr.forEach(i => {
        if (!agr.includes(i))
        {
            temp.push(i);
        }
    });
    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
