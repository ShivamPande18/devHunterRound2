import './App.css';
import HomePage from './Pages/Home/HomePage'
import AnimePage from "./Pages/AnimePage/Components/AnimePage"
import Demo from "./Demo";
import Search from './Pages/Search/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;