/* eslint-disable no-unused-vars */
import './App.css';
import ToastComponent from './ToastComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';

import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Create" element={<Create />}></Route>
                <Route exact path="/blogs/:id" element={<BlogDetails />}></Route>
                <Route exact path="*" element={<NotFound />}></Route>

              </Routes>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>

        <ToastComponent />
      </div>
    </Router>
  );
}

export default App;
