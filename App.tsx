import { useState } from "react";
import Buttons from "./components/Buttons";
import Alert from "./components/Alert";
import CarbonFootprintForm from "./components/FootprintInput";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <h1>Climate Cow</h1>
      <CarbonFootprintForm></CarbonFootprintForm>
      <Buttons onClick={() => null}>Carbon Footprint Calculator</Buttons>
    </div>
  );
}

export default App;
