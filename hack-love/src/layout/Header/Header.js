import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../index.css';

const Header = () => {



    return (
        <header>
            <div>
                <Link to="/" className='logo' style={{ color: 'rgba(13, 13, 13, 0.5)', textDecoration: 'none' }}>사랑도 식후경</Link>
            </div>

            <div>
                <Link to="/create_room" className='link' style={{ color: 'rgba(13, 13, 13, 0.5)', textDecoration: 'none' }}>방 만들기</Link>
                <Link to="/board" className='link' style={{ color: 'rgba(13, 13, 13, 0.5)', textDecoration: 'none' }}>문의하기</Link>
            </div>
        </header>
    );
};

export default Header;