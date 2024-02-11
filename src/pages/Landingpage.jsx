import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
    <div className='container mb-5 mt-5'>
        <Row className='d-flex align-item-center justify-content-evenly'>
            <Col>
                <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                <p style={{textAlign:"justify"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Culpa assumenda architecto commodi alias explicabo voluptas
                    recusandae, porro excepturi fugiat accusamus eaque voluptatum 
                    sunt blanditiis a quod ipsam fugit voluptatem! Recusandae
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium soluta odio voluptas, culpa, laborum ex consequatur
                    atque laudantium voluptatem, in veritatis. Aperiam ullam deserunt
                    neque, rem nesciunt quidem voluptatibus reprehenderit.
                </p>
                <Link to={'/home'}>
                    <button className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
                </Link>
            </Col>
            <Col>
             <img className='ms-5'src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt="" style={{height:"400px"}}/>
            </Col>
        </Row> 
        <div className='container'>
            <h3>Features</h3>
            <div className='d-flex align-item-center justify-content-evenly mt-5 mb-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'300px', width:'100%'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'300px', width:'100%'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'300px', width:'100%'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </div>
        </div>    
    </div>
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
    <Row className='d-flex align-item-center justify-content-evenly'>
        <div className='col-md-6'>
            <h3 className='text-warning'>Simple and Powerful</h3>
            <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play Everything</span><span>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Dignissimos dolores impedit beatae pariatur aliquam 
                 provident nulla, libero voluptatibus iure? Reiciendis, 
                 quidem. Saepe pariatur omnis totam, facere asperiores odit eos quis.</span></p>
            <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play Everything</span><span>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Dignissimos dolores impedit beatae pariatur aliquam 
                 provident nulla, libero voluptatibus iure? Reiciendis, 
                 quidem. Saepe pariatur omnis totam, facere asperiores odit eos quis.</span></p>
            <p style={{color:"white"}}><span className='fw-bolder fs-5'>Play Everything</span><span>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Dignissimos dolores impedit beatae pariatur aliquam 
                 provident nulla, libero voluptatibus iure? Reiciendis, 
                 quidem. Saepe pariatur omnis totam, facere asperiores odit eos quis.</span></p>
        </div>
        <div className='col-md-6'>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/2HstO2h0PWk" title="BANDANA- Malayalam Rap Song - | Baby Jean | Viibee | Maahir M | Kalla Sha |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </Row>
    </div>
    </>
  )
}

export default Landingpage