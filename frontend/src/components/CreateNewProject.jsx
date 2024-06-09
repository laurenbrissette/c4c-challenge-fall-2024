import React,{useState, useEffect} from 'react'
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
      <Form onSubmit={ProcessSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={{offset: 1}}>
            Name
          </Form.Label>
         <Col sm={{span: 9}}>
           <Form.Control id="nameInput" placeholder="Start typing..." />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={{offset: 1}}>
            Description
          </Form.Label>
          <Col sm={{span: 9}}>
            <Form.Control id="descriptionInput" placeholder="Start typing..." />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={{offset: 1}}>
            Thumbnail
          </Form.Label>
          <Col sm={{span: 9}}>
            <Form.Control id="thumbnailInput" placeholder="Start typing..." />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check id="activeInput" label="Active project" />
          </Col>
        </Form.Group>
      <Modal.Footer>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
           <input onClick={props.onHide} type="submit" id="submitNew" value="submit"></input>
          </Col>
        </Form.Group>
      </Modal.Footer>
      </Form>
    </Modal>
  );
}

function ProcessSubmit(event) {
  e.preventDefault();
  console.log("New submission click");
  const newName = document.getElementById('nameInput').value;
  const newDesc = document.getElementById('descriptionInput').value;
  const newActive = document.getElementById('activeInput').value;
  const newThumb = document.getElementById('thumbnailInput').value;

  fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({"name": newName + '', "description": newDesc + '', "isActive": newActive + '', "thumbnailUrl": newThumb + ''})
  });
  
}

function CreateNewProject() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <button className="create-new-button" onClick={() => setModalShow(true)}>
        Create A New Project
    </button>
      <MyVerticallyCenteredModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CreateNewProject;