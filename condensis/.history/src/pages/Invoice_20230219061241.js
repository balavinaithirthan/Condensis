import React from "react";
import { useState } from "react";
import "../Styles/Invoice.css";
import { CFormLabel,  CFormText, CFormInput, CForm } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';



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
      <CForm onSubmit={handleSubmit} class="row g-3">
        <div class="col-md-6">
          <CFormLabel for="exampleInputEmail1" class="form-label">Your Name</CFormLabel>
          <CFormInput onChange={(e) => setName(e.target.value)} type="text" class="form-control" id="InputName" aria-describedby="emailHelp" />
          <CFormText id="emailHelp" id="email-help">We'll never share your email with anyone else.</CFormText>
        </div>

        <div>{' '}</div>

        <div class="col-md-6">
          <CFormLabel for="exampleInputEmail1" class="form-label">Recipient Email</CFormLabel>
          <CFormInput onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
        </div>

        <div class="col-md-6">
          <CFormLabel for="exampleInputPassword1" class="form-label">Amount</CFormLabel>
          <CFormInput onChange={(e) => setAmount(e.target.value)} type="number" class="form-control" id="InputAmount" />
        </div>

        <div>{' '}</div>

        <div class="col-md-6">
          <CFormLabel for="exampleInputEmail1" class="form-label">Description</CFormLabel>
          <CFormInput onChange={(e) => setDescription(e.target.value)} type="text" class="form-control" id="InputDescription" aria-describedby="emailHelp" />
        </div>

        <div>{' '}</div>

        <CButton type="submit" class="btn btn-primary" >Submit</CButton>
      </CForm>
    );
}