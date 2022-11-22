far = 32;


const ftoc = function(far) {
let celc = (far − 32) * 5/9;
};


const ctof = function(celc) {
  let far = (celc * 9/5) + 32;
  return far;
};
//ftoc(32) 
ctof(0) 
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
