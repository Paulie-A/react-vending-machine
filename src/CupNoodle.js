import React from 'react';
import { Link } from 'react-router-dom';
import "./CupNoodle.css";

function CupNoodle() {
    return (
      <div className="CupNoodle">
        <div className="CupNoodle-img">
        </div>
        <Link to='./'>Go back</Link>
      </div>
    );
  }

  export default CupNoodle;