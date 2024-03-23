import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div>
                <Link to="/">사랑도 식후경</Link>
            </div>

            <div>
                <Link to="/create_room">방 만들기</Link>
            </div>
            <div>
                <Link to="/board">문의하기</Link>
            </div>
        </header>
    );
};

export default Header;