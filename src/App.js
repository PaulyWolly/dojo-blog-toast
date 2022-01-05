/* eslint-disable no-unused-vars */
import './App.css';
import ToastComponent from './ToastComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="content">
            <Home />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <ToastComponent />
    </div>
  );
}

export default App;
