import React, { useState } from 'react';
import '../styles/Circle.css';
import photo from '../img/photo_1.PNG';
import { Row, Col } from "reactstrap";
import CustomInput from '../components/CustomInput';

const Creation = () => {
  const [roomName, setRoomName] = useState('배고파요');
  const [location, setLocation] = useState('강남');

  return (
    <div>
      <h4>원하는대로 고르기</h4>
      <Row>
        <Col xs="12" lg="6">
          <div className="circle">
            <img src={photo} alt="돼지국밥" className="centered-image" />
          </div>
        </Col>
        <Col xs="12" lg="6">
          <CustomInput
            label={'방 이름'}
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
            }}
          />
          <CustomInput
            label={'위치'}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Creation;