import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="main--container">
      <div className="main--section">
        <Navbar />
      </div>
      <div className="sidebar"></div>
    </div>
  );
}

export default App;
