import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import "./CupNoodle.css";

function CupNoodle() {
    return (
      <div className="CupNoodle">
         <Message>
            <h1>Matcha Cup Noodle</h1>
          </Message>
        <div className="CupNoodle-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default CupNoodle;