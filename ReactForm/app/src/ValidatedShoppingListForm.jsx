import { useState } from "react";
// import { validate } from "uuid";

function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const [productIsValid, setProductIsValid] = useState();

  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };
  const handleChange = (evt) => {
    // console.log(formData);
    if (evt.target.name === "product") {
      validate(evt.target.value);
    }
    const fieldChanged = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currFormData) => {
      return { ...currFormData, [fieldChanged]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {
      console.log("Submitted");
      addItem(formData);
      setFormData({ product: "", quantity: "" });
    } else {
      console.log("Product hasn't submitted");
    }
  };

  return (
    <div>
      <h1>
        Product Name: {formData.product} - Product Qty: {formData.quantity}
      </h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          name="product"
          id="product"
          value={formData.product}
          onChange={handleChange}
          style={inputStyle}
        />
        {!productIsValid && (
          <span style={{ color: "red" }}>Product name cannot be empty</span>
        )}
        <label htmlFor="quantity">Product Quantity</label>
        <input
          type="number"
          placeholder="Product Quantity"
          name="quantity"
          id="quantity"
          value={formData.quantity}
          onChange={handleChange}
          style={inputStyle}
        />
        <br />
        {/* button will be disabled if is product is false */}
        {/* both method work the same way */}
        {/* <button disabled={!productIsValid && "true"} type="submit"> */}
        <button disabled={!productIsValid} type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px", // This adds space between fields
};

const inputStyle = {
  width: "200px",
  padding: "8px",
  margin: "5px 0",
};

export default ValidatedShoppingListForm;
