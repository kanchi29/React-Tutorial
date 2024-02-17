// import logo from './logo.svg';

// import About from './components/About';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
    <Navbar title="Textutils" about="About Textutils" mode={mode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to be analysed"/>
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
