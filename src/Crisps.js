import React from 'react';
import { Link } from 'react-router-dom';
import './Crisps.css';

function Crisps() {
    return (
      <div className="Crisps">
        <div className="Crisps-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default Crisps