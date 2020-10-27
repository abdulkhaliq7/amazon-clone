import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/checkout' >
            <Checkout />
          </Route>
          <Route path='/' >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
