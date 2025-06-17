
// export default function Property({ property }) {
export default function Property({ name,price,rating }) {
  return (
    <div className="sub-container">
        {/* <h1>{property.name}</h1>
        <h1>${property.price} a night</h1>
        <h1>{property.rating}*</h1> */}
        <h1>{name}</h1>
        <h1>${price} a night</h1>
        <h1>{rating}*</h1>
    </div>
  );
}