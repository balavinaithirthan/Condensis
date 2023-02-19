import React, {Component} from 'react';
import { CCard, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import '../Styles/LectureCard.css'
var lectures = [{
    "Title": "Lecture 1: Introductions, Counting",
    "Date": "Jan 9, 2023",
    "Preview": "Welcome to CS 224N"
}, {
    "Title": "Lecture 2: Introductions, Counting",
    "Date": "Jan 11, 2023",
    "Preview": "Welcome to CS 224N"
}, {
    "Title": "Lecture 3: Introductions, Counting",
    "Date": "Jan 9, 2023",
    "Preview": "Welcome to CS 224N"
}, {
    "Title": "Lecture 4: Introductions, Counting",
    "Date": "Jan 9, 2023",
    "Preview": "Welcome to CS 224N"
}, {
    "Title": "Lecture 5: Introductions, Counting",
    "Date": "Jan 9, 2023",
    "Preview": "Welcome to CS 224N"
}]
class LectureCard extends Component {
    constructor(props) {
        super(props);
        this.data = lectures[this.props.lecture_id]
    }

    render() {
        return (
            <div id="LectureCard_Main">
                <CCard textColor={'white'} style={{ width: '18rem', backgroundColor: '#17cf97', border: "none"}}>
                    <CCardBody>
                        <CCardTitle>{this.data.Title}</CCardTitle>
                        <CCardSubtitle className="mb-2 text-medium-emphasis"><div style={{color: `#eeeeee`}}>{this.data.Date}</div></CCardSubtitle>
                        <CCardText>
                            {this.data.Preview}
                        </CCardText>

                      </CCardBody>
                    </CCard>
            </div>

        );
    }
}

export default LectureCard;