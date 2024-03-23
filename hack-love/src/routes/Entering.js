import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Circle.css';
import photo from '../img/photo_1.PNG';
import { Row, Col, Label } from "reactstrap";

const Entering = () => {
    const [nickname, setNickname] = useState('디자이너 우');

    return (
        <Row className="align-items-center mb-5">
            <Col lg="12" className="d-flex justify-content-center align-items-center mt-3">
                <h4>원하는대로 고르기</h4>
            </Col>
            <Col lg="12" className="d-flex justify-content-center align-items-center mt-3 mb-5">
                <h2>배고파요</h2>
            </Col>

            <Col xs="12" className="d-flex justify-content-center align-items-center mb-5">
                <img src={photo} alt="돼지국밥" className="centered-image" style={{ width: '20vw', height: '20vw' }} />
            </Col>
            <Col sm="12" className="d-flex justify-content-center align-items-center mb-5">
                <Label for="location"
                    tag="h4">
                    별명
                </Label>
            </Col>
            <Col sm="12" className="d-flex justify-content-center align-items-center mb-5">
                <input
                    type="text"
                    style={{
                        border: 'none',
                        borderBottom: '1px solid #ced4da',
                        width: '300px',
                        padding: '5px 10px',
                        outline: 'none',
                        backgroundColor: 'transparent', // 투명한 배경 설정
                        fontweight: '700',
                        fontsize: '2.6rem',
                        color: 'rgba(13, 13, 13, 0.75)',
                    }}
                    value={nickname}
                    onChange={(e) => {
                        setNickname(e.target.value);
                    }}
                />
            </Col>
            <Col className="d-flex justify-content-center align-items-center mt-3 mb-5">
                <div>
                    <Link to="/waiting_room" className='nextBtn' style={{ color: '#0D0D0D', textDecoration: 'none' }}>JOIN</Link>
                </div>
            </Col>
        </Row>
    );
};

export default Entering;