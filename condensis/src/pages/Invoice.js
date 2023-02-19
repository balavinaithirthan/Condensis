import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { useState } from "react";

export default function Invoice() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'd6aa2703655f4ba2af2a56202961ca86:dXbCgzYBMibj8ZwuQMd2NXr6rtvjZ8'
            },
            body: JSON.stringify({
              amount: amount,
              description: description,
              name: name,
              recipient: email
            })
          };
          
          fetch('https://demo.checkbook.io/v3/invoice', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };

    return (
        <MDBContainer fluid>
    
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Invoice (Powered by Checkbook.io)</p>

                  <p> </p>

                  <div className="d-flex flex-row align-items-left mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput placeholder="Your Name" label='Your Name' id='form1' type='text' className='w-100' onChange={(e) => setName(e.target.value)}/>
                  </div>

                  <p> </p>
    
                  <div className="d-flex flex-row align-items-left mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput placeholder="Recipient Email" label='Recipient Email' id='form2' type='email' onChange={(e) => setEmail(e.target.value)}/>
                  </div>

                  <p> </p>
    
                  <div className="d-flex flex-row align-items-left mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput placeholder="Amount" label='Amount' id='form3' type='number' onChange={(e) => setAmount(e.target.value)}/>
                  </div>

                  <p> </p>
    
                  <div className="d-flex flex-row align-items-left mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput placeholder="Description" label='Description' id='form4' type='text' onChange={(e) => setDescription(e.target.value)}/>
                  </div>

                  <p> </p>
    
                  <MDBBtn className='mb-4' size='lg' onSubmit={handleSubmit}>Send Invoice</MDBBtn>
    
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
}