import { useState } from "react";

//this form is use to create a from to submit data to parent component
function ShopingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 1 });
  const handleChange = (evt) => {
    const fieldChanged = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currFormData) => {
      return { ...currFormData, [fieldChanged]: newValue };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(formData);
    addItem(formData);
    setFormData({product:"",quantity:1})
  };
  return (
    <div>
      <h1>
        Product Name:{formData.product}-Product Qty:{formData.quantity}
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          name="product"
          id="product"
          value={formData.product}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Product Quantity</label>
        <input
          type="number"
          placeholder="Product Quantity"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <br />
        <button>Add Item</button>
      </form>
    </div>
  );
}
export default ShopingListForm;
