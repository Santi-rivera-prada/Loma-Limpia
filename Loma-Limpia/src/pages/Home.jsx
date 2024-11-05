import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <Container fluid className='p-0'>
      {/* Carousel de Bienvenida */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/1200x400'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Bienvenido a Loma Limpia</h3>
            <p>Tu fuente de manualidades ecológicas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/1200x400'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Materiales Reciclables</h3>
            <p>Transformamos desechos en arte.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://via.placeholder.com/1200x400'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Crea con Conciencia</h3>
            <p>Haz parte del cambio con Loma Limpia.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección de Bienvenida */}
      <Container className='text-center my-5'>
        <h1 className='display-4'>¡Bienvenido a Loma Limpia!</h1>
        <p className='lead'>
          Nos especializamos en crear hermosas manualidades utilizando materiales reciclables. Explora nuestra galería de productos y únete a nosotros en nuestra misión de promover un futuro más verde.
        </p>
        <Button variant='success' size='lg'>Explorar Productos</Button>
      </Container>

      {/* Catálogo de Productos */}
      <Container className='my-5'>
        <h2 className='text-center mb-4'>Nuestro Catálogo</h2>
        <Row>
          <Col md={4}>
            <Card className='h-100'>
              <Card.Img variant='top' src='https://via.placeholder.com/350x150' />
              <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>
                  Hermosa artesanía hecha con botellas de plástico recicladas.
                </Card.Text>
                <Button variant='primary'>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='h-100'>
              <Card.Img variant='top' src='https://via.placeholder.com/350x150' />
              <Card.Body>
                <Card.Title>Producto 2</Card.Title>
                <Card.Text>
                  Decoraciones hechas con cartón reutilizado.
                </Card.Text>
                <Button variant='primary'>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='h-100'>
              <Card.Img variant='top' src='https://via.placeholder.com/350x150' />
              <Card.Body>
                <Card.Title>Producto 3</Card.Title>
                <Card.Text>
                  Arte de pared hecho con tapas de botellas.
                </Card.Text>
                <Button variant='primary'>Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sección de Animación */}
      <Container fluid className='bg-success text-white py-5'>
        <Container className='text-center'>
          <h2 className='mb-4'>Únete a Nuestra Misión</h2>
          <p className='lead'>
            En Loma Limpia, creemos que cada pequeño esfuerzo cuenta. Ayúdanos a mantener nuestro planeta limpio y verde.
          </p>
          <Button variant='light' size='lg' className='mt-3'>Contáctanos</Button>
        </Container>
      </Container>

    </Container>
  )
}

export default Home
