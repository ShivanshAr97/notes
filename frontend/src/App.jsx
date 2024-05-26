import All from "./components/All";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <All />
      </div>

      <div className="col-span-1">
        <Create />
        <Update />
      </div>
    </div>
  );
}

export default App;
