import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Board from "./pages/Board";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;
