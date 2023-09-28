import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../App.scss';
import './HeroSection.scss';

function HeroSection() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted ></video>
      <div className='container-info'>
        <h1>Where do you want to go?</h1>
        <p className='text'>Trips, experiences, and places. All in one service.</p>
        <div className='hero-btns row'>
          <div className='hero-btn col-3'>
            <InputGroup className="">
              <Form.Control aria-label="Destination, City"
                placeholder="Destination, City"
              />
              <InputGroup.Text><i className="fas fa-search"></i></InputGroup.Text>
            </InputGroup>
          </div>
          <div className='hero-btn col-3'>
            <Form.Select className='calender' aria-label="Default select example">
              <option>Any Month</option>
              <option value="1">January</option>
              <option value="2">Februany</option>
              <option value="3">March</option>
            </Form.Select>
          </div>

          <div className='hero-btn col-3'>
            <Form.Select className='sort' aria-label="Default select example">
              <option>Sort By Date</option>
              <option value="1">Sort By Name</option>
              <option value="2">Price Low to High</option>
              <option value="3">Price High to Low</option>
            </Form.Select>
          </div>
          <div className='hero-btn col-3'>
            <Button className='btn btn-search' variant="danger">Search</Button>
          </div>
        </div>
        {click === true &&
          <div className='hero-btns advance row mt-4'>
            <div className='hero-btn col-3'>
              <Form.Select aria-label="Default select example">
                <option>Any Categories</option>
                <option value="1">Mountain</option>
                <option value="2">Rural</option>
                <option value="3">Snow & ice</option>
              </Form.Select>
            </div>
            <div className='hero-btn col-3'>
              <Form.Select aria-label="Default select example">
                <option>Any Destinations</option>
                <option value="1">Tokyo</option>
                <option value="2">Seoul</option>
                <option value="3">Paris</option>
              </Form.Select>
            </div>
            <div className='hero-btn col-3'>
              <InputGroup className="">
                <Form.Control aria-label="Amount (to the nearest dollar)"
                  placeholder="Max budget ex. 500"
                />
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        }

        <div className='ad-sreach' onClick={handleClick}>
          <i className={click ? "fas fa-angle-up pe-2" : "fas fa-angle-down pe-2"}></i>
          Advanced Search
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
