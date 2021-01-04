import { useContext } from "react";
import { StoreContext } from "./context/store";

function App() {
  const [item, setItem] = useContext(StoreContext);
  return (
    <>
      <h1>Store item is: {item}</h1>
      <button onClick={() => setItem("Coco Pops")}>Change store item</button>
    </>
  );
}

export default App;
