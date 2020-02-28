import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator d-flex">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM! </span>
      <span>Something has gone terribly wrong </span>
      <span>(but we have already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;