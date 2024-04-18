const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0) return "ERROR";
    else if (typeof n1 != "number" || typeof n2 != "number") return "ERROR";
    else if (n2 > n1)
    {
        let result = 0;
        for (let i = n1; i < n2; i++)
        {
            result += i;
        }
        result += n2;
        return result;
    }
    else if (n1 > n2)
    {
        let result = 0;
        for (let i = n2; i < n1; i++)
        {
            result += i;
        }
        result += n1;
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
