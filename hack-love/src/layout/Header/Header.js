import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../index.css';

const Header = () => {

    return (
        <header>
            <div>
                사랑도 식후경
            </div>

            <div>
                <Link to="/board" className='link'>방 만들기</Link>
                <Link to="/board" className='link'>문의하기</Link>
            </div>
        </header>
    );
};

export default Header;