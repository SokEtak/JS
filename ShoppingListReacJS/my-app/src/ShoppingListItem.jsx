import "./ShoppingListItem.css";

function ShoppingListItem({ item }) {
  const checkQty = item.qty <= 0;
  const ifInStock = checkQty
    ? `${item.itemName}(Out)`
    : `${item.itemName}-${item.qty}-${item.cate}`;
  const itemColorClass = checkQty ? "red" : "green";
  return <li className={itemColorClass}>{ifInStock}</li>;
}
export default ShoppingListItem;