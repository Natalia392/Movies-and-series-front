import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp.jsx';
import Home from './components/Views/Home/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
