import React from 'react';
import { Link } from 'react-router-dom';
import Message from  './Message';
import './Crisps.css';

function Crisps() {
    return (
      <div className="Crisps">
         <Message>
            <h1>Pote Chips!</h1>
          </Message>
        <div className="Crisps-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default Crisps