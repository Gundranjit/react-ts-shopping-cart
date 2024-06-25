import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <div className="flex justify-center items-center gap-2 mb-2">
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-20 object-cover"
      />
      <div className="flex-1">
        <div className="font-medium">
          {item.title}{' '}
          {quantity > 1 && (
            <span className="text-gray-500 text-md">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-500 text-xs">{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        className="text-red-600 border border-red-600 rounded p-1 text-sm hover:bg-red-100"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
}
