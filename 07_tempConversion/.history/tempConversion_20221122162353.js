far = 32;


const ftoc = function(far) {
let celc = (far - 32) * 5/9;
return math.round(celc * 10) /10;
};


const ctof = function(celc) {
  let far = (celc * 9/5) + 32;
  return Math.round(far *10) / 10;
};
ftoc(100);
ctof(0);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
