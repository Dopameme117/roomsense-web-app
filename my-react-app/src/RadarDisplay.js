import React, { useState } from 'react';

function RadarDisplay() {
  const size = 300; // Size of the SVG element
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  // Function to update coordinates on mouse move within the SVG
  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top;  // y position within the element.
    
    // Adjust the scale for the x-axis from -6m to 6m, considering the SVG size
    const displayX = ((x / size) * 12) - 6; 
    // Adjust the scale for the y-axis from 0m to 15m
    const displayY = 15 - ((y / size) * 15);
    
    setCoordinates({ 
      x: Math.max(Math.min(displayX, 6), -6),  // Ensure x is within -6m to 6m
      y: Math.max(Math.min(displayY, 15), 0)  // Ensure y is within 0m to 15m
    });
  };

  // Function to reset coordinates when mouse is not over the SVG
  const handleMouseOut = () => {
    setCoordinates({ x: 0, y: 0 });
  };

  // Generate grid lines
  const gridLines = [];
  const labels = [];
  for (let i = 0; i <= 5; i++) {
    const pos = (size / 5) * i;
    gridLines.push(
      <line key={`h-${i}`} x1="0" y1={pos} x2={size} y2={pos} stroke="white" />
    );
    gridLines.push(
      <line key={`v-${i}`} x1={pos} y1="0" x2={pos} y2={size} stroke="white" />
    );

    // Labels
    if (i < 5) {
      // Y axis labels (vertical)
      labels.push(
        <text key={`y-${i}`} x="-10" y={size - pos + 5} fontSize="10" fill="white" textAnchor="end">
          {`${i * 3}m`}
        </text>
      );
      // X axis labels (horizontal)
      const xLabel = (i - 2) * 3; // from -6m to +6m
      labels.push(
        <text key={`x-${i}`} x={pos} y={size + 15} fontSize="10" fill="white" textAnchor="middle">
          {`${xLabel}m`}
        </text>
      );
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <svg
        width={size}
        height={size}
        viewBox={`-20 0 ${size} ${size + 20}`} // Add extra space for labels
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: 'black', cursor: 'crosshair' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {gridLines}
        {labels}
        <circle cx={size / 2} cy={size / 2} r="2" fill="yellow" />
      </svg>
      <div className="coordinates-box" style={{ textAlign: 'center', marginTop: '5px' }}>
        X: {coordinates.x.toFixed(1)}m, Y: {coordinates.y.toFixed(1)}m
      </div>
    </div>
  );
}

export default RadarDisplay;
