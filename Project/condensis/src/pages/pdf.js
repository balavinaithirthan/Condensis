import React, { Component, useState } from 'react';
  
//PDFjs worker from an external cdn
var pdf_info = ["https://storage.googleapis.com/video_inputs/pdfs/notes1.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes2.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes3.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes4.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes5.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes6.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes7.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes8.pdf", "https://storage.googleapis.com/video_inputs/pdfs/notes9.pdf"];
  
class PDF extends Component {

    constructor(props) {
        super(props);
        this.pdf = pdf_info[this.props.pdf_id]; 
        console.log(this.pdf);
    }
    
    render() { return (
    <div className="main">
        <iframe src={this.pdf} style={{ height: '2500px', width: '1px', minWidth: '100%', minHeight: '100%'}}></iframe>
    </div>
    );
    }

}
export default PDF;


