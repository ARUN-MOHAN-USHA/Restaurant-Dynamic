// import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';



function RestaurantDetails() {


  const restaurantsData = useSelector((state) => state.restaurants.data);


  const {id} = useParams();

  

  const restaurant = restaurantsData.find((item) =>item.id == id)

  console.log(restaurant);

  return (
    <Container style={{fontSize:'18px'}}>
      <Row>
        <Col md ={4}>
          {
              restaurant && (
                 <Card style={{backgroundColor:'#b2d4cd'}}> 
              <Card.Img variant="top" src={restaurant.photograph} style={{ height: '550px',width:'360px' }} />
              <Card.Body>
                <Card.Title style={{ color: '#2b879e',fontSize:'28px' }}>{restaurant.name}</Card.Title>
                <h5 style={{ color: '#3f42eb' }}>
                   {restaurant.neighborhood}
                </h5>
                <h5>
                    {restaurant.address}
                </h5>
                <h5 style={{ color: '#6de610' }}>
                    {restaurant.cuisine_type}
                </h5>
              </Card.Body>
              {/* <h4 style={{ color: 'red',fontSize:'28px' }}>Operating Hours:</h4>
              <ListGroup variant="flush">
                  <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
                  <h4 style={{ color: 'red',fontSize:'28px' }}>Reviews:</h4>
                  <ListGroup.Item>Name: {restaurant.reviews[0].name}</ListGroup.Item>
                  <ListGroup.Item>{restaurant.reviews[0].comments}</ListGroup.Item>
                </ListGroup> */}
              </Card>
                     )

          } 
        </Col>
        <Col md ={6}>
          {
              restaurant && (
                <Card style={{ width: '50rem' }}>
                  <h4 style={{ color: 'red',fontSize:'28px' }}>Operating Hours</h4>
                <ListGroup variant="flush">
                  <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
                  <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                  <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                  <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
                  <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
                  <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
                  <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>

                  <h4 style={{ color: 'red',fontSize:'28px' }}>Reviews:</h4>
                  <ListGroup.Item>Name: {restaurant.reviews[0].name}</ListGroup.Item>
                  <ListGroup.Item> Date: {restaurant.reviews[0].date}</ListGroup.Item>
                  <ListGroup.Item> Rating: {restaurant.reviews[0].rating}</ListGroup.Item>
                  <ListGroup.Item> Comments: {restaurant.reviews[0].comments}</ListGroup.Item>
                  <ListGroup.Item>Name: {restaurant.reviews[1].name}</ListGroup.Item>
                  <ListGroup.Item> Date: {restaurant.reviews[1].date}</ListGroup.Item>
                  <ListGroup.Item> Rating: {restaurant.reviews[1].rating}</ListGroup.Item>
                  <ListGroup.Item> Comments: {restaurant.reviews[1].comments}</ListGroup.Item>
                  <ListGroup.Item>Name: {restaurant.reviews[2].name}</ListGroup.Item>
                  <ListGroup.Item> Date: {restaurant.reviews[2].date}</ListGroup.Item>
                  <ListGroup.Item> Rating: {restaurant.reviews[2].rating}</ListGroup.Item>
                  <ListGroup.Item> Comments: {restaurant.reviews[2].comments}</ListGroup.Item>
                </ListGroup>
              </Card>

                     )
          }       
        </Col>
    
      </Row>
    </Container>
  )
}
export default RestaurantDetails