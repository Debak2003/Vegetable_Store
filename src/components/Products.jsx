// src/VegetableProductPage.jsx

import React, { useState } from 'react';
import { Button, Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Products.css';

// Import images
import carrotImage from '../components/image/carrot.jpg';
import beetrootImage from '../components/image/beetroot.webp';
import brinjalImage from '../components/image/brinjal.jpeg';
import tomatoImage from '../components/image/tomatto.jpg';
import PotattoImage from '../components/image/potatto.jpg';
import LadyImage from '../components/image/lady.webp';
import CucumberImage from '../components/image/cucumber.jpg';
import RedImage from '../components/image/redchilly.jpg';
import GreenImage from '../components/image/greenchilly.jpg';
import GooseImage from '../components/image/Gooseberry.webp';
import pumpImage from '../components/image/pumpkin.jpg';
import CabbegeImage from '../components/image/cabbege.jpg';
import OnionImage from '../components/image/onion.jpg';
import beansImage from '../components/image/beans.jpg';
import CauliImage from '../components/image/cauliflower.webp';
import DrumImage from '../components/image/drumstick.webp';
import mushImage from '../components/image/mushroom.jpg';
import CapsiImage from '../components/image/capsicum.jpeg';
import garlicImage from '../components/image/garlic.jpg';
import bitterImage from '../components/image/bittergourd.webp';
import CornImage from '../components/image/corn.jpg';

const conversionRate = 84.14; // Example conversion rate from USD to INR

const vegetables = [
  { id: 1, name: 'Carrot', price: 0.86, image: carrotImage },
  { id: 2, name: 'beetroot', price: 0.67, image: beetrootImage },
  { id: 3, name: 'brinjal', price: 0.48, image: brinjalImage },
  { id: 4, name: 'Tomato', price: 0.81, image: tomatoImage },
  { id: 5, name: 'Potatto', price: 0.63, image: PotattoImage },
  { id: 6, name: 'Lady s Finger', price: 0.38, image: LadyImage },
  { id: 7, name: 'Cucumber', price: 0.53, image: CucumberImage },
  { id: 8, name: 'onion', price: 0.74, image: OnionImage },
  { id: 9, name: 'Redchilly', price: 1.47, image: RedImage },
  { id: 10, name: 'Greenchilly', price: 1.50, image: GreenImage },
  { id: 11, name: 'Gooseberry', price: 1.55, image: GooseImage },
  { id: 12, name: 'pumpkin', price: 0.24, image: pumpImage },
  { id: 13, name: 'Cabbege', price: 0.56, image: CabbegeImage },
  { id: 14, name: 'Beans', price: 0.50, image: beansImage },
  { id: 15, name: 'Cauliflower', price: 0.42, image: CauliImage },
  { id: 16, name: 'Drumstick', price: 3.74, image: DrumImage },
  { id: 17, name: 'Mushroom', price: 1.19, image: mushImage },
  { id: 18, name: 'Capsicum', price: 2.97, image: CapsiImage },
  { id: 19, name: 'Garlic', price: 4.28, image: garlicImage },
  { id: 20, name: 'Bittergourd', price: 0.72, image: bitterImage },
  { id: 21, name: 'Corn', price: 1.49, image: CornImage },
];

const VegetableProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (vegetable) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === vegetable.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === vegetable.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...vegetable, quantity: 1 }];
    });
  };

  const buy = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(total * conversionRate); // Convert to INR
    alert(`You have purchased items for a total of ₹${(total * conversionRate).toFixed(2)}`);
    setCart([]);
  };

  const resetCart = () => {
    setCart([]); // Reset the cart to an empty array
  }

  return (
  

    <Container id='products'>
      <h1  className="my-4" style={{fontFamily:'Playfair Display'}}>Available Vegetable Products:</h1>
      <hr />
      <Row>
        {vegetables.map(veg => (
          <Col key={veg.id} md={3} className="mb-4">
            <Card>
              <div className='zoom-container'>
              <Card.Img variant="top" src={veg.image} alt={veg.name} className="zoom-image" />
              </div>
              <Card.Body>
                <Card.Title>{veg.name}</Card.Title>
                <Card.Text>${veg.price.toFixed(2)} (~₹{(veg.price * conversionRate).toFixed(2)})</Card.Text>
                <Button variant="success" onClick={() => addToCart(veg)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />

      <h2 className="my-4 text-center" id='cart' style={{fontFamily:'Playfair Display'}}>Shopping Cart</h2>
      <div className='text-center'>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name} x {item.quantity} - ${item.price.toFixed(2)} each (~₹{(item.price * conversionRate).toFixed(2)})
          </ListGroup.Item>
        ))}
      </ListGroup>
      </div>
      <h3 className="my-3 text-center" style={{fontFamily:'Playfair Display'}}>Total Price: ₹{totalPrice.toFixed(2)}</h3>
      <div className='text-center'>
      <Button variant="success" onClick={buy} disabled={cart.length === 0} >
        Buy
      </Button>
      </div>
      <div className='text-center mt-4 '>
      <Button variant="danger" onClick={resetCart} className="ml-2">
          Refresh
        </Button>
        </div>

      <hr />
      <div className='m-4'>
      <h3 style={{fontFamily:'Playfair Display'}}>Thank You for your Purchace,</h3>
      <h4 style={{fontFamily:'Playfair Display'}}>See you again...</h4> 
      </div>
    </Container>
  );
};

export default VegetableProductPage;

