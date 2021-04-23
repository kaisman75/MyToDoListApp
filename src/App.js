
import NewTask from "./Components/NewTask"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <div className="container">
      <NewTask />
      </div>
    
    </div>
  );
}

export default App;
