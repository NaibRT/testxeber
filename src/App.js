import React from 'react';
import Header from './components/header/header.component'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './components/main/main.component'
import Aside from './components/aside/aside.component'
import Footer from './components/footer/footer.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <div className='main'>
    <Main/>
    <Aside/>
    </div>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
