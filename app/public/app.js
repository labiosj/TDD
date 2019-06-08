let total = 0;

const addValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total + newValue;
  if(isNaN(sum)){
    return total;
  }
  return sum;
}

const arrayTest = function(array) {
  return array.reduce(this.addValue);
}