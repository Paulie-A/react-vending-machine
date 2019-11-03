import React from 'react';
import { Link } from 'react-router-dom';
import './Soda.css'

function Soda() {
    return (
      <div className="Soda">
        <div className="Soda-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default Soda