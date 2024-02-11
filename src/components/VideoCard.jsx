import React from 'react'
import Card from 'react-bootstrap/Card';
import View from './View';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VideoCard({displayVideo}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: '100%',height:"350px" }} className='mt-5 mb-5'>
      <Card.Img height="250px" variant="top" src={displayVideo.url} onClick={handleShow}/>
      <Card.Body>
            <div className='d-flex align-items-center justify-content-between'>
                <h6>Video Caption</h6>
                <Button variant="danger" className='ms-4'>
                <i class="fa-solid fa-trash"></i>
                </Button>
            </div>
      </Card.Body>
    </Card>   
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <iframe width="100%" height="400" src=  {displayVideo.embededLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard