import "./App.css";
import Chicken from "./Chicken";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";
import ColorList from "./ColorList";
import Slots from "./Slots";

function App() {
  return (
    <div>
      <Slots num1="1" num2="1" num3="1" />
      <Slots num1="1" num2="2" num3="1" />
      {/* <Heading color="magenta" text="Welcome!" fontSize="20px" />
      <Heading color="teal" text="Blah!" fontSize="48px" />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategray", "teal"]} /> */}
      {/* <ListPicker values={["a", "b", "c"]} />
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
