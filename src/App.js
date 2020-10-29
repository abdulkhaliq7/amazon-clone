import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/checkout' >
            <Header />
            <Checkout />
          </Route>
          <Route path='/' >
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
