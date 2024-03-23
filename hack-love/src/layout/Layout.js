import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useLocation } from 'react-router';

const Layout = (props) => {

    const location = useLocation();

    // 주소가 "/question"인 경우 헤더를 숨깁니다.
    const showHeader = location.pathname !== "/question";

    return (
        <div>
            {showHeader && <Header />}

            <main>
                {props.children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout
