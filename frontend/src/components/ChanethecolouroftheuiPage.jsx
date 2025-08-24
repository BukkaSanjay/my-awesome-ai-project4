jsx
import React, { useState } from 'react';
import { ChromePicker } from 'react-color'; // You'll need to install this: npm install react-color

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default white

  const handleChangeComplete = (color) => {
    setBackgroundColor(color.hex);
  };

  return (
    <div style={{ backgroundColor, padding: '20px', minHeight: '100vh' }}>
      <h1>Change UI Color</h1>
      <div style={{ marginBottom: '20px' }}>
        <ChromePicker color={backgroundColor} onChangeComplete={handleChangeComplete} />
      </div>
      <div>
        {/* Example content -  This area's background will change with the color picker */}
        <h2>This is some example content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default ColorChanger;
