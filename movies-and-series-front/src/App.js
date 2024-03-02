import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withAuth from './hoc/withAuth.jsx';
import LoginSignUp from './components/Views/LoginSignup/LoginSignUp.jsx';
import Home from './components/Views/Home/Home.jsx';

const AuthenticatedHome = withAuth(Home);

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<LoginSignUp />} />
        <Route path='/home' element={<AuthenticatedHome />} />
      </Switch>
    </Router>
  );
}

export default App;
