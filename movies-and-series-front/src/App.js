import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withAuth from './hoc/withAuth.jsx';
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp.jsx';
import Home from './components/Views/Home/Home.jsx';
import { UserProvider } from './services/userContext.js';
import FavoriteMovies from './components/Views/Favorites/FavoriteMovies.jsx';

const AuthenticatedHome = withAuth(Home);
const AuthenticatedFavorites = withAuth(FavoriteMovies);

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
          <Route path='/home' element={<AuthenticatedHome />} />
          <Route path='/favorites' element={<AuthenticatedFavorites />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
