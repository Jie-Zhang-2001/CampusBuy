import './App.css';
import './css/comm.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarasoulSignUp from './Components/CarasoulSignUp';
import Footer from './Components/Footer';
import './css/landing.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CarasoulSignUp />
      <Footer />
    </div>
  );
}

export default App;
