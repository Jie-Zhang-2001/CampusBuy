import './App.css';
import './css/comm.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarasoulSignUp from './Components/CarasoulSignUp';
import Footer from './Components/Footer';
import './css/landing.css';
import LoginPage from './LoginPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/">
      <Header />
      <CarasoulSignUp />
      <Footer />
      </Route>
      <Route path="/login">
      <LoginPage />
      </Route>
      <Route path="/register">
      <RegisterPage />
      </Route>
      <Route path="/home">
      <HomePage />
      </Route>
      
    </div>
    </Router>
  );
}

export default App;
