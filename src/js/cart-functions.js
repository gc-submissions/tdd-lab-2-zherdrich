
let calculateChange = (payment, total) => {
    return payment - total;
  }
  
  let isSufficientPayment = (total, payment) =>
  {
    if (payment >= total) {
      return true;
    } else {
      return false;
    }
    
   return true ? payment >= total : false;
  
   return payment >= total
   
  }

  let calculateTotal = (itemsArray) => {
      let sum = 0
      for (i = 0; i < itemsArray.length; i++) {
          sum += itemsArray[i].price;
      }
      return sum;
  }
  
  module.exports = {calculateChange, isSufficientPayment, calculateTotal};
  