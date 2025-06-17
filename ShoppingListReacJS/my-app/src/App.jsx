import './App.css'
import ShoppingList from './ShoppingList'
import Properties from './Properties';
const items = [
  {id:1,itemName:"Carrot",qty:2,cate:"Vegetable"},
  {id:2,itemName:"Apple",qty:7,cate:"Fruit"},
  {id:3,itemName:"Banana",qty:0,cate:"Fruit"},
]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129332, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129033, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129034, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129035, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129036, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {

  return (
    <div>
    <Properties properties={properties} />
    {/* <ShoppingList items={items}/> */}
    </div>
  )
}

export default App
