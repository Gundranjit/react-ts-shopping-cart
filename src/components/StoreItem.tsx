import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function StoreItem({ id, title, price, image }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-4">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-gray-500">{formatCurrency(price)}</span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>
          ) : (
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <span>in cart</span>
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-3 rounded"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white py-1 px-4 rounded text-sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

