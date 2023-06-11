import React from "react";
import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((i) => (
          // <ShoppingListItem
          //   key={i.id}
          //   item={i.item}
          //   quantity={i.quantity}
          //   completed={i.completed}
          // />
          <ShoppingListItem key={i.id} {...i} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
