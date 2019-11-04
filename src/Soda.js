import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Soda.css'

function Soda() {
    return (
      <div className="Soda">
         <Message>
            <h1>Cream Soda</h1>
          </Message>
        <div className="Soda-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default Soda