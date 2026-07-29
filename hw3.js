function pow(a, b) {
  let pow_res = 1;
  
  for (let i = 0; i < b; i++) {
    pow_res *= a;
  }
  return pow_res;
}

console.log(pow(2, 3));
