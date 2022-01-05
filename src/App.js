/* eslint-disable no-unused-vars */
import './App.css';
import ToastComponent from './ToastComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

      <ToastComponent />
    </div>
  );
}

export default App;
