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
import AuthContext from './store/auth-context';
import {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import LoadingPage from './Pages/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ctx = useContext(AuthContext);
  
  async function request(){
    const response = await axios.get(`${ctx.backendURL}/isloggedin`, { withCredentials: true, credentials: 'include' });
    if( response.data.authenticated ){
      ctx.login(response.data.token)
    }
    setIsLoading(false);
  }; 
  
  useEffect(()=>{
    request();
  },[]);
  

  if( isLoading ){
    return(<LoadingPage/>);
  }
  
  
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
        
        <Route path='/products/:productId'>
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
