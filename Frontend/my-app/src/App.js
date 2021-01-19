import './App.css';
import './css/comm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      </Switch>
    </Router>
  );
}

export default App;
