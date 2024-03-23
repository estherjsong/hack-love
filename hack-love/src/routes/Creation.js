import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Circle.css';
import photo from '../img/photo_1.PNG';
import { Row, Col } from "reactstrap";
import CustomInput from '../components/CustomInput';

const Creation = () => {
  const [roomName, setRoomName] = useState('배고파요');
  const [location, setLocation] = useState('강남');

  return (
    <div>
      <Row className="align-items-center mb-5">
        <Col lg="12" className="d-flex justify-content-center align-items-center mt-3 mb-5">
          <h4>원하는대로 고르기</h4>
        </Col>

        <Col xs="12" lg="6" className="d-flex justify-content-center align-items-center mb-5">
          <div className="circle" style={{width: '35vh', height: '35vh'}}>
            <img src={photo} alt="돼지국밥" className="centered-image" />
          </div>
        </Col>
        <Col xs="12" lg="6" style={{justifyContent: 'space-around'}}>
          <CustomInput
            label={'방 이름'}
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <div style={{height: '5vh'}}></div>
          <CustomInput
            label={'위치'}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-3 mb-5">
          <div>
            <Link to="/enter_room" className='link' style={{ color: '#0D0D0D', textDecoration: 'none',  fontWeight: '200', fontSize: '1.8rem', paddingLeft: '0' }}>CREATE</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Creation;