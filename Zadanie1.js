function validate(force, acceleration, mass) {
  if (force == mass * acceleration) return true;
  else return false;
}
console.log(validate(100, 10, 10));
console.log(validate(110, 10, 10));
