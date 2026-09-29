import { describe, it, expect } from "vitest";
import {
  addItem,
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../../src/utils/cartLogic";

describe("addItem", () => {
  it("adds a new product to an empty cart", () => {
    const cart = [];
    const product = {
      id: 1,
      title: "Test product",
      price: 9.99,
      thumbnail: "test.jpg",
    };

    const result = addItem(cart, product);

    expect(result).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ]);
  });
  it("product already in the cart, increase quantity by one", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ];
    const product = {
      id: 1,
      title: "Test product",
      price: 9.99,
      thumbnail: "test.jpg",
    };

    const result = addItem(cart, product);
    expect(result).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 2,
      },
    ]);
  });
  it("does not mutate the original cart", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ];
    const product = {
      id: 1,
      title: "Test product",
      price: 9.99,
      thumbnail: "test.jpg",
    };

    addItem(cart, product);

    expect(cart).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ]);
  });
  it("removes product from the cart", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ];

    const result = removeFromCart(cart, 1);

    expect(result).toEqual([]);
  });
  it("increments products quantity by 1", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ];

    const result = incrementItem(cart, 1);

    expect(result).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 2,
      },
    ]);
  });
  it("decrements products quantity by 1", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 2,
      },
    ];

    const result = decrementItem(cart, 1);

    expect(result).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ]);
  });
  it("decrements products quantity by 1, and removes item if quantity is 0", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ];

    const result = decrementItem(cart, 1);

    expect(result).toEqual([]);
  });
  it("does not mutate the original cart", () => {
    const cart = [
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 2,
      },
    ];

    const result = decrementItem(cart, 1);

    expect(result).toEqual([
      {
        id: 1,
        title: "Test product",
        price: 9.99,
        thumbnail: "test.jpg",
        quantity: 1,
      },
    ]);
  });
});
