import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ol>
      {items.map((i) => {
        return <ShoppingListItem item={i} key={i.id} />;
      })}
    </ol>
  );
}

export default ShoppingList;
