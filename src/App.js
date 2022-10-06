import "./App.css";
import image from "./shopping.jpg";
import imageTwo from "./man.jpg";
import { GroceryList } from "./GroceryList";

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={image} width="200px" alt="shopping" /></div>
      <h1  className="container">Grocery List</h1>
      <GroceryList />
      <div className="container" >
      <img src={imageTwo} width="200px" alt="shopping" /></div>
    </div>
  );
}

export default App;
