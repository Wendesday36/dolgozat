import "./App.css";

import MondatokModel from "./model/MondatokModel";
import Kiegeszit from "./View/Kiegeszit";

function App() {
  const model = new MondatokModel();
  return (
    <div className="App">
      <header className="App-header">
        Dolgozat
        
       
      </header>
      <Kiegeszit/>
    </div>
  );
}

export default App;
