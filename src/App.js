import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenid@" text="Click me"/>
    </div>
  );
}

export default App;
