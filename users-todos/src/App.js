import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SingleUserPage from "./Pages/SingleUserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:userId" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
