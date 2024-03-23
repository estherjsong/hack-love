import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Circle.css';
import photoqr from '../img/image.png';
import { Row, Col, Label } from "reactstrap";
import styled from 'styled-components';

const Waiting = () => {

    const [nameList, setNamelist] = useState(['숑콜라', '별명짓기 싫어', '별명이 왜 여섯개나', '메롱', '창의력..따위', '마지막', '이 아니었어', '스크롤 보려고 별명 더 만드릭', '몇개나 더 만들어', '이정도면 충분하지 ㅇ낳으까'])

    return (
        <div>
            <Row className="align-items-center mb-5">
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-3">
                    <h4>원하는대로 고르기</h4>
                </Col>
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-2 mb-2">
                    <h1>배고파요</h1>
                </Col>
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-2 mb-5">
                    <h3>{nameList.length}명이 대기 중입니다.</h3>
                </Col>

                <Col xs="12" lg="6" className="d-flex flex-column align-items-center">
                    <img src={photoqr} alt="QR코드" className="centered-image" style={{ width: '35vh', height: '35vh', marginLeft: '10vw' }} />
                    <p className='link' style={{ marginLeft: '10vw', marginTop: '1vw' }}>링크 공유하기</p>
                </Col>
                <Col xs="12" lg="4" id="scrollBar" style={{ maxWidth: '30vw', maxHeight: '35vh', overflowY: 'auto', marginTop: '-10vh', paddingLeft: '3vw' }}>
                    {nameList.map((name, index) => (
                        <Row key={index} className="align-items-center">
                            <div className="circle" style={{ width: '10px', height: '10px' }} />
                            &nbsp;&nbsp;
                            <h3 className='ms-5'>
                                {name}
                            </h3>
                        </Row>
                    ))}
                </Col>
            </Row>
            <div style={{width: 'fit-content', margin: '0 auto'}}>
                <div style={{width: 'fit-content'}}>
                    <Link to="/result" className='link' style={{ color: '#0D0D0D', textDecoration: 'none', width: 'fit-content', fontWeight: '200', fontSize: '1.8rem'}}>START</Link>
                </div>
            </div>
        </div >

    );
};

export default Waiting;