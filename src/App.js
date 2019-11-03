import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Crisps from './Crisps';
import Soda from './Soda';
import CupNoodle from './CupNoodle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <nav className="App-nav">
     <NavLink exact activeClassName="active-link" to="/">
       Vending Machine
     </NavLink>
     <NavLink exact activeClassName="active-link" to="./crisps">
       Crisps
     </NavLink>
     <NavLink exact activeClassName="active-link" to="./soda">
       Soda
     </NavLink>
     <NavLink exact activeClassName="active-link" to="./cupnoodle">
       Cup Noodle
     </NavLink>
   </nav> */}

   <Switch>
     <Route exact path='/' component={VendingMachine} />
     <Route exact path='/crisps' component={Crisps} />
     <Route exact path='/soda' component={Soda} />
     <Route exact path='/cupnoodle' component={CupNoodle} />
   </Switch>


 </div>
 

  );
}

export default App;
