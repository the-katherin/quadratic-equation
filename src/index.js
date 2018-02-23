module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a = arr[0];
  var c = arr[8];
  var b = arr[4];
  var x1;
  var x2;
  var result;
  var signOfB = arr[3];
  var signOfC = arr[7];
  if (signOfB == '-'){
    b = -b;
    }
  if (signOfC == '-'){
    c = -c;
    }
  var discr = b*b-4*a*c;

  if (discr>0) {
    x1 = Math.round(((-b) + Math.sqrt(discr)) / (2*a));
    x2 = Math.round(((-b) - Math.sqrt(discr)) / (2*a));
    result = [x1, x2];
    }
  else if (discr === 0) {
    x1 = Math.round((-b)/(2*a));
    x2=x1;
    result = [x1, x2];
    }
  else result = 0;
  var sortResult = result.sort();
  return sortResult;


}
