import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
