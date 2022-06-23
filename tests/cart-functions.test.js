const {
  calculateChange,
  isSufficientPayment, calculateTotal
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    //Assert/;
    expect(calculateChange(6, 5)).toEqual(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73", () => {
    expect(calculateChange(13.03, 12.3)).toBeCloseTo(0.73);
  });
});

describe("isSufficientPayment", () => {
  test("when total is 5 and payment is 6, should be true", () => {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });

  test("when total is 10 and payment is 7, should be false", () => {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
});

describe("calculateTotal", () => {
  // let myArray = [
  //   {
  //     name: "Jelly",
  //     price: 3.50
  //   },
  //   {
  //     name: "PB",
  //     price: 4.99
  //   },
  //   {
  //     name: "Bread",
  //     price: 5.00
  //   }
  // ]

  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    let myArray = [
      {
        name: "Jelly",
        price: 4.99,
      },
    ];
    expect(calculateTotal(myArray)).toEqual(4.99);
  });
});
// describe("isSufficientPayment", () => {
//   test("add isSufficientPayment tests here");
// });

// describe("calculateTotal", () => {
//   test("add calculateTotal tests here");
// });

// describe("addItem", () => {
//   test("add addItem tests here");
// });

// describe("removeItem", () => {
//   test("add removeItem tests here");
// })

