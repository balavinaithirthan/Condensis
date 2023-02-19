import React from "react";
import "../Styles/StanfordCourses.css";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react'

export default function StanfordCourses() {
    return(
        <div>
            <h1 id="stanfordtitle">Stanford University Courses</h1>
            <>
            {[
                { color: 'primary', textColor: 'primary' },
                { color: 'secondary', textColor: 'secondary' },
                { color: 'success', textColor: 'success' },
                { color: 'danger', textColor: 'danger' },
                { color: 'warning', textColor: 'warning' },
                { color: 'info', textColor: 'info' },
                { color: 'light' },
                { color: 'dark' },
            ].map((item, index) => (
                <CCard
                textColor={item.textColor}
                className={`mb-3 border-${item.color}`}
                style={{ maxWidth: '18rem' }}
                key={index}
                >
                <CCardHeader>Header</CCardHeader>
                <CCardBody>
                    <CCardTitle>{item.color} card title</CCardTitle>
                    <CCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    </CCardText>
                </CCardBody>
                </CCard>
            ))}
            </>
        </div>
    );
}