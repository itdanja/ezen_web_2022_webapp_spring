
import React from 'react'; // 컴포넌트 호출
import Styles from '../css/header.css'; // src->css->header.css
import logo from '../img/logo.png'    // 이미지 적용

export default function Header(){
    return (
        <div>
            <img className="logo" src={logo} />
            <h3 className="header_name">헤더</h3>
        </div>
    );
}