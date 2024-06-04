import './App.css'
import Dashboard from './components/Dashboard'
import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CreateNewProject from './components/CreateNewProject'

import 'bootstrap/dist/css/bootstrap.min.css'




function App() {

  return (
    <div className="all">
    <div className="heading">
      <span className="upperlogo"><img className="upperlogo" src="/favicon.ico"></img></span>
      <span className="title">
        <h1 id="c4c">Code 4 Community </h1><h1 id="partner">Partner Site</h1>
      </span>
    </div>
    < CreateNewProject />
    < Dashboard />
    </div>
    
  )
}

export default App
