import "./App.css";
import Chicken from "./Chicken";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";
import ColorBoxes from "./ColorBoxes";
import ColorBox from "./ColorBox";

const data = [
  {
    id: 1,
    item: "eggs",
    quantity: 12,
    completed: false,
  },
  {
    id: 2,
    item: "milk",
    quantity: 1,
    completed: true,
  },
  {
    id: 3,
    item: "chicken breasts",
    quantity: 4,
    completed: false,
  },
  {
    id: 4,
    item: "carrots",
    quantity: 6,
    completed: true,
  },
];

const properties = [
  {
    id: 129031,
    name: "Desert Yurt",
    rating: 4.9,
    price: 150,
  },
  {
    id: 129331,
    name: "Lone Mountain Cabin",
    rating: 4.8,
    price: 250,
  },
  {
    id: 129032,
    name: "Cactus Retreat",
    rating: 4.75,
    price: 300,
  },
  {
    id: 129033,
    name: "Redwood Treehouse Escape",
    rating: 4.9,
    price: 120,
  },
  {
    id: 129034,
    name: "Oceanview Condo",
    rating: 4.7,
    price: 140,
  },
  {
    id: 129035,
    name: "Gold Miner Campground",
    rating: 4.69,
    price: 96,
  },
];

const colors = [
  "green",
  "yellow",
  "pink",
  "violet",
  "black",
  "brown",
  "teal",
  "orange",
  "red",
  "blue",
];

function App() {
  return (
    <div>
      <ColorBoxes colors={colors} />
      {/* <ColorBoxes /> */}
      {/* <Toggler /> */}
      {/* <ToggleCounter /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Clicker message="HI!!!" buttonText="Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} />
      <Slots num1="1" num2="1" num3="1" />
      <Slots num1="1" num2="2" num3="1" />
      <Heading color="magenta" text="Welcome!" fontSize="20px" />
      <Heading color="teal" text="Blah!" fontSize="48px" />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategray", "teal"]} /> 
      <ListPicker values={["a", "b", "c"]} />
      <Greeter from="Sheri" />
      <Greeter person="Tanesha" from="Theresa" />
      <Greeter person="Avril" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  );
}

export default App;
