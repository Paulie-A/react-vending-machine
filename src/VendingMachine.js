import React from 'react';
import Message from './Message';
import './VendingMachine.css';


function VendingMachine() {
    return (
        <div className="VendingMachine">
             <Message>
            <h1>Vending Machine</h1>
            </Message>
            <div className="VendingMachine-img"></div>
       </div>
  
    );
  }



  export default VendingMachine;