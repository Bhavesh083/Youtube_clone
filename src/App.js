import React from 'react'
import Navbar from "./comps/Navbar";
import Recved from './comps/Recved';
import Sidebar from "./comps/Sidebar";
import recved from "./comps/Recved";
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='page-app'>
      <Sidebar />
      <Recved />
      </div>
    </Router> 
  );
}

export default App;
