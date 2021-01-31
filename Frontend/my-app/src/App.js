import './App.css';
import './css/comm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import SearchPage from './Pages/SearchPage';
import ProductPage from './Pages/ProductPage';
import ProfilePage from './Pages/ProfilePage';

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
        
        <Route path='/search'>
          <SearchPage />
        </Route>
        
        <Route path='/product'>
          <ProductPage />
        </Route>
        
        <Route path='/product'>
          <ProductPage />
        </Route>

        <Route path='/profile'>
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
