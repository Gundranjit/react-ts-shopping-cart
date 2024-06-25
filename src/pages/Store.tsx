import React from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {storeItems.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
