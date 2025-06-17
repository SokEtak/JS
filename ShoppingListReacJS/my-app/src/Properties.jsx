import "./Properties.css"
import Property from "./Property";

function Properties({ properties }) {
  return (
    <div className="container">
      {properties.map((p) => {
        // return <Property key={p.id} property={p}/>;{*/ everty thing are same */}
        return <Property key={p.id} name={p.name} rating={p.rating} price={p.price}/>; {/* just to follow  */}
      })}
    </div>
  );
}

export default Properties;
