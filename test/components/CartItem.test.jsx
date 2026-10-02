import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../../src/context/CartContext";
import CartItem from "../../src/components/CartItem";

describe("CartItem", () => {
  const item = {
    id: 1,
    title: "Test product",
    thumbnail: "test.jpg",
    price: 9.99,
    quantity: 2,
  };

  function renderWithContext(contextValue) {
    return render(
      <CartContext.Provider value={contextValue}>
        <CartItem {...item} />
      </CartContext.Provider>,
    );
  }

  it("renders the product's title, price and quantity", () => {
    renderWithContext({
      removeItem: vi.fn(),
      incrementQty: vi.fn(),
      decrementQty: vi.fn(),
    });

    expect(screen.getByText("Test product")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("calls incrementQty with the item's id when + is clicked", async () => {
    const incrementQty = vi.fn();
    renderWithContext({
      removeItem: vi.fn(),
      incrementQty,
      decrementQty: vi.fn(),
    });

    const user = userEvent.setup();
    await user.click(screen.getByLabelText("Increase quantity"));

    expect(incrementQty).toHaveBeenCalledWith(1);
  });

  it("calls decrementQty with the item's id when - is clicked", async () => {
    const decrementQty = vi.fn();
    renderWithContext({
      removeItem: vi.fn(),
      incrementQty: vi.fn(),
      decrementQty,
    });

    const user = userEvent.setup();
    await user.click(screen.getByLabelText("Decrease quantity"));

    expect(decrementQty).toHaveBeenCalledWith(1);
  });
  it("calls removeItem with the item's id when delete-icon is clicked", async () => {
    const removeItem = vi.fn();
    renderWithContext({
      removeItem,
      incrementQty: vi.fn(),
      decrementQty: vi.fn(),
    });

    const user = userEvent.setup();
    await user.click(screen.getByLabelText("Remove item from cart"));

    expect(removeItem).toHaveBeenCalledWith(1);
  });
});
