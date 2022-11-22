const leapYears = function(year) {

    if (year % 4 === 0 || year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else {
        return false;
    }
};
leapYears(1996);
leapYears(2000);
leapYears(1985);// undefined
leapYears(1997);// undefined
leapYears(34992);// true

// Do not edit below this line
module.exports = leapYears;
