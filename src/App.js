// import logo from './logo.svg';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Textutils" about="About Textutils" />
    <div className="container my-3"><TextForm heading="Enter the text to be analysed"/>
    </div>
    </>
  );
}

export default App;
