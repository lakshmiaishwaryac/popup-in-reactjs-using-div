import React, { useState } from 'react';
import Popup from './Popup';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    <p>Sucessful execution of popup</p>
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Sucessful execution of popup.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}

export default App;
