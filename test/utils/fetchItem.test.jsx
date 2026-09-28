import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchItems } from "../../src/utils/fetchItems";

describe("fetchItems", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns the products array on success", async () => {
    const fakeProducts = [
      { id: 1, title: "Test product", price: 9.99, thumbnail: "test.jpg" },
    ];
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ products: fakeProducts }),
      }),
    );

    const result = await fetchItems();

    expect(result).toEqual(fakeProducts);
  });

  it("throws when the response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 500 }),
    );

    await expect(fetchItems()).rejects.toThrow("500");
  });

  it("throws when the network request fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network down")),
    );

    await expect(fetchItems()).rejects.toThrow("Network down");
  });
});
