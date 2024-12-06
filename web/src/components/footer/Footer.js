import React from 'react';
import styles from './Footer.module.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <h3>넷플릭스 대한민국</h3>
                <div className={styles.footerGridBox}>
                    <Link to="https://help.netflix.com/support/412" target="_blank">넷플릭스 소개</Link>
                    <Link to="https://help.netflix.com/" target="_blank">고객 센터</Link>
                    <Link to="https://www.netflix.com/youraccount" target="_blank">계정</Link>
                    <Link to="https://media.netflix.com/" target="_blank">미디어 센터</Link>
                    <Link to="http://ir.netflix.com/" target="_blank">투자 정보(IR)</Link>
                    <Link to="https://jobs.netflix.com/jobs" target="_blank">입사 정보</Link>
                    <Link to="https://www.netflix.com/watch" target="_blank">넷플릭스 지원 디바이스</Link>
                    <Link to="https://help.netflix.com/legal/termsofuse" target="_blank">이용 약관</Link>
                    <Link to="https://help.netflix.com/legal/privacy" target="_blank">개인정보 처리방침</Link>
                    <Link to="https://www.netflix.com/kr/#" target="_blank">쿠키 설정</Link>
                    <Link to="https://help.netflix.com/legal/corpinfo" target="_blank">회사 정보</Link>
                    <Link to="https://help.netflix.com/contactus" target="_blank">문의하기</Link>
                    <Link to="https://fast.com/" target="_blank">속도 테스트</Link>
                    <Link to="https://help.netflix.com/legal/notices" target="_blank">법적 고지</Link>
                    <Link to="https://www.netflix.com/kr/browse/genre/839338" target="_blank">오직 넷플릭스에서</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
