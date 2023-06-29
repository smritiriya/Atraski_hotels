import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import data from "./rooms.json"

// import data from './rooms.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';
// import Header from './Header';
// import Footer from './Footer';


const Room1 = () => {
  const [mm, setMM] = useState(data);
  const params = useParams();
  const mm1 = mm.filter((datas) => datas.id == params.id);

 const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedDate2, setSelectedDate2] = useState(getCurrentDate2());

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function getCurrentDate2() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = currentDate.getDate();
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function arrivalDateChange(events) {
    setSelectedDate(events.target.value);
  }

  function departureDateChange(events) {
    setSelectedDate2(events.target.value);
  }

  const [adults, setAdults] = useState(1);

  function Increment() {
    setAdults(adults + 1);
  }

  function Decrement() {
    if (adults > 0) {
      setAdults(adults - 1);
    }
  }

  return (
    <>
      {mm1.map((data) => {
        return (
          <>
            <Header/>
            <Container className='my-5'>
            <Row>
                <Col md={9}>
                  <Card
                    style={{
                      width: '40rem',
                      margin: '0 auto',
                      height: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <Card.Img variant="top" src={data.images} />
                    <Card.Body>
                      <Card.Title>Room Specification</Card.Title>
                      <Card.Text>
                        This 13x12sq feet room is designed with wooden floorings. The decor includes a double bed or twin beds and a desk along with a couple of chairs. A mini-bar, Internet access (complimentary), coffee/tea maker, a telephone with direct dial access, a cable TV, and an in-room safe are available in this room.
                      </Card.Text>
                      <Row className="mb-3">
                        <Col md={6}>
                          <i class="fa fa-male" title=" Sleeps 2 Guests" aria-hidden="true"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Sleeps 2 Guests</span>
                        </Col>
                        <Col md={6}>
                          <i class="fa fa-wifi"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Free Wi-Fi</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <i class="fa fa-bath"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Bath</span>
                        </Col>
                        <Col md={6}>
                          <i class="fa fa-shower"></i>
                          <span style={{ fontSize: '0.9rem', marginLeft: '10px' }}>Shower</span>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Header as="h5">{data.charges}</Card.Header>
                    <Card.Body>
                      <Card.Title>Booking</Card.Title>
                      <Card.Text>
                        <form>
                          <label htmlFor="check-in" className="mt-4" style={{ marginRight: '5%', fontSize: '1.2rem' }}>
                            Check-in
                          </label>
                          
                          <input type="date" name="check-in" value={selectedDate} onChange={arrivalDateChange} />
                          

                          <label htmlFor="check-out" className="mt-4" style={{ fontSize: '1.2rem', marginRight: '4%' }}>
                            Check-out
                          </label>
                          <input type="date" name="check-out" value={selectedDate2} onChange={departureDateChange} />

                          <div className="Container mt-3">
                            <span style={{ marginRight: '4%', fontSize: '1.2rem' }}>Adults</span>
                            <Button style={{ marginRight: '4%' }} onClick={Decrement}>
                              -
                            </Button>
                            <span style={{ marginRight: '4%' }}>{adults}</span>
                            <Button style={{ marginRight: '4%' }} onClick={Increment}>
                              +
                            </Button>
                          </div>
                        </form>
                      </Card.Text>
                      <Link to="/BookingRoom">
                        <Button variant="primary">Booking</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>            </Container>
         
          <Footer/>
          </>
        );
      })}
    </>
  );
}

export default Room1;

