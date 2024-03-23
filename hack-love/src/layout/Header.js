/* Header.js */
import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">홈</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to="/board">게시판</Link>
            {/* <a href="/">홈</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/board">게시판</a> */}
            <hr />
            {/* 헤더 입니다. */}
        </header>
    );
};

export default Header;