import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withAuth from './hoc/withAuth.jsx';
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp.jsx';
import Home from './components/Views/Home/Home.jsx';

const AuthenticatedHome = withAuth(Home);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSignUp />} />
        <Route path='/home' element={<AuthenticatedHome />} />
      </Routes>
    </Router>
  );
}

export default App;
