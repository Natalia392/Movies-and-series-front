import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
