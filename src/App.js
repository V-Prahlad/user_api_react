import "./App.css";
import Data from "./components/Data";
import EditUser from "./components/EditUser";

function App({ data }) {
  return (
    <div className="App">
      <Data />
      <EditUser />
    </div>
  );
}

export default App;
