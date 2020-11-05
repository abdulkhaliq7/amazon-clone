import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import './App.css';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  `pk_live_51HhllMB54cXU4qcR7oO1MJ1ZSv4lLlHF7P5WdUtFnSV
    vDeyJicQPJCxYKEIRuNv2ofIEOUJFr4cAZFvtmrooy20Y0040TaT9jk`
)


function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser)
        if (authUser) {  
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else {
            dispatch({
              type: 'SET_USER', 
              user: null,
            })  
        }
      })
  },[])

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
          <Route path='/payment' >
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
