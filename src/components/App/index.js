import React, { Component } from 'react';
import { 
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Buy Something</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
          </ul>
          <div className='content'>
            <Route exact path="/" Component={Home}/>
            <Route path="/shop" Component={Shop}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;