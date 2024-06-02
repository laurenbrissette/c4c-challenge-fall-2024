import './App.css'
import Dashboard from './components/Dashboard'
import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal className="popUp"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create A New Project
        </Modal.Title>
      </Modal.Header>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={{offset: 1}}>
          Name
        </Form.Label>
        <Col sm={{span: 9}}>
          <Form.Control id="nameInput" placeholder="Start typing..." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={{offset: 1}}>
          Description
        </Form.Label>
        <Col sm={{span: 9}}>
          <Form.Control id="descriptionInput" placeholder="Start typing..." />
        </Col>
      </Form.Group>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check id="activeInput" label="Active project" />
        </Col>
      </Form.Group>

        </Form>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <input onClick={ProcessSubmit} type="button" id="submitNew" value="submit"></input>
        </Col>
      </Form.Group>
      </Modal.Footer>
    </Modal>
  );
}

function ProcessSubmit() {
  const newName = document.getElementById('nameInput');
  const newDesc = document.getElementById('descriptionInput');
  const newActive = document.getElementById('activeInput');

  return (
    <>
    <p>{alert(newName.value)}</p>
    </>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div class="all">
    <div className="heading">
      <span className="upperlogo"><img className="upperlogo" src="/favicon.ico"></img></span>
      <span className="title">
        <h1 id="c4c">Code 4 Community </h1><h1 id="partner">Partner Site</h1>
      </span>
    </div>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Create New Project
    </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      < Dashboard />
    </div>
    
  )
}

export default App
