import React from "react";
import "../Styles/StanfordCourses.css";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton, CCardHeader } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';


export default function StanfordCourses() {
    return(
        <div>
            <h1 id="stanfordtitle">Stanford University Courses</h1>
            <div id="courses">
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" href="data:image/png;base64,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" />
                <CCardBody>
                    <CCardTitle>CS 106B</CCardTitle>
                    <CCardText>
                    Stanford's Programming Abstractions Course.
                    </CCardText>
                    <CButton href="#">View more</CButton>
                </CCardBody>
            </CCard>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top" src=".public/logo192.png" />
                <CCardBody>
                    <CCardTitle>More coming soon</CCardTitle>
                    <CCardText>
                    More courses will be added soon.
                    </CCardText>
                    {/* <CButton href="#">View more</CButton> */}
                </CCardBody>
            </CCard>
            </div>
        </div>
    );
}