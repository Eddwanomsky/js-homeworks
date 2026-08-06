var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function getPrices(obj) {
  var prices = [];
  for (var key in obj) {
    if (typeof obj[key] !== 'function') {
      prices.push(parseFloat(obj[key]));
    }
  }
  return prices;
}

services.price = function() {
  var prices = getPrices(this);
  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return sum + " грн";
};

services.minPrice = function() {
  var prices = getPrices(this);
  var min = Math.min.apply(null, prices);
  return min + " грн";
};

services.maxPrice = function() {
  var prices = getPrices(this);
  var max = Math.max.apply(null, prices);
  return max + " грн";
};

console.log("Загальна вартість:", services.price());    
console.log("Мінімальна ціна:", services.minPrice()); 
console.log("Максимальна ціна:", services.maxPrice()); 