import Cart from "../dist/cart.js";

test('add Cart', () => {
  const myCart = new Cart();
  myCart.add({ id: 1, name: 'Example Product', price: 50 });

  const correct = [
    { id: 1, name: 'Example Product', price: 50 }
  ];

  expect(myCart._items).toEqual(correct);
});

test('get Total Cost true', () => {
  const cart = new Cart();
  cart.add({ id: 1, name: 'Product 1', price: 50 });
  cart.add({ id: 2, name: 'Product 2', price: 30 });

  const totalCost = cart.getTotalCost();
  const totalCostWithDiscount = cart.getTotalCostWithDiscount(10);

  expect(totalCost).toBe(80);
  expect(totalCostWithDiscount).toBe(72);
});

describe('Cart', () => {
  test('removeItemById removes the correct item from the cart', () => {
    const cart = new Cart();
    const product1 = { id: 1, name: 'Product 1', price: 50 };
    const product2 = { id: 2, name: 'Product 2', price: 30 };

    cart.add(product1);
    cart.add(product2);

    expect(cart._items).toEqual([product1, product2]);

    cart.removeItemById(1);
    expect(cart._items).toEqual([product2]);
  });

  test('removeItemById does nothing when id is not found', () => {
    const cart = new Cart();
    const product1 = { id: 1, name: 'Product 1', price: 50 };

    cart.add(product1);
    expect(cart._items).toEqual([product1]);

    cart.removeItemById(2);
    expect(cart._items).toEqual([product1]);
  });
});

