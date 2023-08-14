import React from 'react'
import { Button, Card } from 'react-bootstrap';
import{Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';


function Restaurant({restaurant}) {

  // const navigate = useNavigate();

    
  return (
    <Card style={{backgroundColor:'#b2d4cd'}} >
    <Card.Img variant="top" src={restaurant.photograph} style={{ height: '260px' }} />
    <Card.Body>
      <Card.Title style={{color: 'red',fontSize:'21px' }}>{restaurant.name}</Card.Title>
      <h5 style={{color: 'blue'}}>
           {restaurant.neighborhood}
      </h5>
      <h5>
           {restaurant.address}
      </h5>
      <h5 style={{color: 'orange'}}>
           {restaurant.cuisine_type}
      </h5>
      <Button variant="primary" as={Link} to={`/restaurant/${restaurant.id}`}>More Info</Button>
      <RestaurantDetails></RestaurantDetails>
    </Card.Body>
  </Card>
  )
}

export default Restaurant

