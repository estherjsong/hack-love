import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div>
                사랑도 식후경
            </div>

            <div>
                <Link to="/board">방 만들기</Link>
            </div>
            <div>
                <Link to="/board">문의하기</Link>
            </div>
        </header>
    );
};

export default Header;