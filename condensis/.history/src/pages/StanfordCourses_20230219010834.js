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
                <CCardImage orientation="top" src=".public/logo192.png" />
                <CCardBody>
                    <CCardTitle>CS 106B</CCardTitle>
                    <CCardText>
                    Stanford's Programming Abstractions Course.
                    </CCardText>
                    <CButton href="#">View more</CButton>
                </CCardBody>
            </CCard>

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