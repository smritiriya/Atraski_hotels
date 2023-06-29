import React from 'react';
import {Container , Row , Col , Image , Button} from 'react-bootstrap';
import Header from '../components/LandingPAge/Header';
import Footer from '../components/LandingPAge/Footer';

// import { selectedDate } from './room1';

function BookingRoom(){
    
    const price = 15000; 

    const displayRazorpay=(amount)=>{

    }

    return(
        <>
            <Header/>
            <Container className='my-5'>
                <Col md={8}>
                    <div className="Container">
                        <h2 style={{borderBottom:'1px solid black'}}>Cart Details</h2>


                        <p>Check In Date:</p>
                        <p>Check Out Date:</p>
                        <p>Adults</p>
                        <p>Total Price</p>


                        <Container>
                            <Button onClick={displayRazorpay(price)}>Add To Cart</Button>
                        </Container>

                        
                    </div>
                </Col>

                <Col md={4}>

                </Col>
            </Container>
        <Footer/>
        </>
    )
}

export default BookingRoom;