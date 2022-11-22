const leapYears = function(year) {

    if (year %100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 != 0) {
        return true;
    } else  {
        return false;
    }
};
//leapYears(1996);
//leapYears(2000);
//leapYears(1985);// undefined
leapYears(1997);// 
leapYears(34992);// 
//leapYears(1900);//f//True
//leapYears(1600);//t// True
//leapYears(700);//f//True


// Do not edit below this line
module.exports = leapYears;
