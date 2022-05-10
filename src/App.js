import { Toaster } from "react-hot-toast";
import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toaster />
        <Header />
        <Register />
        <Display />
      </header>
    </div>
  );
}

export default App;
