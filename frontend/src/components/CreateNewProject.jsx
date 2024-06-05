import React,{useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyVerticallyCenteredModal(props) {

  function ProcessSubmit(event) {
    event.preventDefault()
    console.log("New submission click");
    const newName = document.getElementById('nameInput').value;
    console.log(newName)
    const newDesc = document.getElementById('descriptionInput').value;
    console.log(newDesc)
    const newActive = document.getElementById('activeInput');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(JSON.stringify({"name": newName + '', "description": newDesc + ''}));
  
    fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({"name": newName + '', "description": newDesc + ''})
    }).then(response => JSON.stringify(response)).then(data =>
      console.log(data));
  
  return (
    <>
      {alert("processed")}
    </>
    );
  }

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
      <Form>
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
      </Form>
    </Modal>
  );
}




function CreateNewProject() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Create New Project
    </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CreateNewProject;