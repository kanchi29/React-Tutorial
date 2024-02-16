// import logo from './logo.svg';

import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Textutils" about="About Textutils" />
    <div className="container my-3">
      {/* <TextForm heading="Enter the text to be analysed"/> */}
      <About/>
    </div>
    
    </>
  );
}

export default App;
