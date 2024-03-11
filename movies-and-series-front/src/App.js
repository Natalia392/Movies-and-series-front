import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withAuth from './hoc/withAuth.jsx';
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp.jsx';
import Home from './components/Views/Home/Home.jsx';
import { UserProvider } from './services/userContext.js';

const AuthenticatedHome = withAuth(Home);

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
          <Route path='/home' element={<AuthenticatedHome />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
