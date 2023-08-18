import React, {Component} from 'react';
import LectureCard from "../components/LectureCard";
import { CCard, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'
import '../Styles/CourseDetail.css'
import '@coreui/coreui/dist/css/coreui.min.css'


var class_info = [{
    "Title": "CS 106B",
    "Prof": "Keith Schwarz",
    "Last_updated": "Feb 18, 2023",
    "Quarter": "Winter 2023",
    "Lectures": [1, 3]
}, {
    "Title": "CS 111",
    "Prof": "Nick Troppoli",
    "Last_updated": "Feb 15, 2023",
    "Quarter": "Winter 2023",
    "Lectures": [1, 3]

}, {
    "Title": "CS 224N",
    "Prof": "Chris Manning",
    "Last_updated": "Feb 16, 2023",
    "Quarter": "Winter 2023",
    "Lectures": [1, 3]

}];

class CourseDetail extends Component {

    constructor(props) {
        super(props);
        this.class_info = class_info[this.props.course_id]
        // console.log(this.class_info)
        console.log(this.lectures)
    }

    render() {
        return (
            <div id="CourseDetail_Main">
                <div id="course_info">
                    <u id="class_title"><b>{this.class_info.Title}</b></u>
                    <br/>
                    <br style={{fontSize: "1"}}/>
                    <h5>Taught by {this.class_info.Prof}</h5>
                    <h5>Last updated {this.class_info.Last_updated}</h5>
                    <h5>{this.class_info.Quarter}</h5>
                </div>
                <hr id="divider"/>

                <div id="lecture_card">
                    {this.class_info.Lectures.map(function(object, i){
                        return <LectureCard lecture_id={object}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default CourseDetail;