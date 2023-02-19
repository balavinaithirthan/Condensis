import React, {Component} from 'react';
import { CCard, CButton, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import '../Styles/LectureCard.css'
var lectures = [{
    "Title": "Lecture 1: Getting Started with C",
    "Date": "Jan 9, 2023",
    "Preview": "Welcome to CS 106B",
    "notes_id": 0
}, {
    "Title": "Lecture 2: Getting Started with Recursion",
    "Date": "Jan 11, 2023",
    "Preview": "Welcome to CS 106B",
    "notes_id": 1
}, {
    "Title": "Lecture 3: Collections Part I",
    "Date": "Jan 13, 2023",
    "Preview": "Welcome to CS 106B",
    "notes_id": 2
}, {
    "Title": "Lecture 4: Collections Part II",
    "Date": "Jan 15, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 3
}, {
    "Title": "Lecture 5: Collections Part III",
    "Date": "Jan 17, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 4
}, {
    "Title": "Lecture 6: Thinking Recursively Part I",
    "Date": "Jan 19, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 5
}, {
    "Title": "Lecture 7: Thinking Recursively Part II",
    "Date": "Jan 21, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 6
}, {
    "Title": "Lecture 8: Thinking Recursively Part III",
    "Date": "Jan 23, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 7
}, {
    "Title": "Lecture 9: Thinking Recursively Part IV",
    "Date": "Jan 25, 2023",
    "Preview": "Welcome to CS 106B", 
    "notes_id": 8
},
]
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
                        <CCardTitle><a href={"/pdf/" + this.data.notes_id}>{this.data.Title}</a></CCardTitle>
                        <CCardSubtitle className="mb-2 text-medium-emphasis"><div style={{color: `#eeeeee`}}>{this.data.Date}</div></CCardSubtitle>
                        {/*<CCardText>*/}
                        {/*    {this.data.Preview}*/}
                        {/*</CCardText>*/}

                      </CCardBody>
                    </CCard>
            </div>

        );
    }
}

export default LectureCard;