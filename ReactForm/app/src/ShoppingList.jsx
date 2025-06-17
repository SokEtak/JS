import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
import { v4 as uuid } from "uuid";
function ShoppingList() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      product: "strawberrry",
      quantity: 1,
    },
    {
      id: uuid(),
      product: "Blueberry",
      quantity: 10,
    },
  ]);
  //   let id = 0;
  const addItem = (item) => {
    if (!item.product) return;
    setItems((currItems) => {
      //   console.log(id)
      return [...currItems, { ...item, id: uuid() }];
    });
  };
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.product}-{item.quantity}
            </li>
          );
        })}
      </ul>
      <ValidatedShoppingListForm addItem={addItem}/>
    </>
  );
}
export default ShoppingList;
