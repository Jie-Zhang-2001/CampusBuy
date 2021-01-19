import './App.css';
import './css/comm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
