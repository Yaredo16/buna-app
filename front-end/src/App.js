import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
