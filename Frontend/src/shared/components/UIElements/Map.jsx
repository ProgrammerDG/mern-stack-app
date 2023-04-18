import React from 'react';

import "./Map.css";

const Map = (props) => {
  return (
    <div 
    className={`map ${props.className}`} 
    style={props.style}>
        THE MAP!
    </div>
  );
}

export default Map;

