import React, { useState, useRef, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import QRCode from "qrcode.react";
// import  {WhatsAppQRCode}  from './WhatsAppQRCode.js';


const IncidentForm = ({ raiseNewInc }) => {

  const [incNumber, setIncNumber] = useState(""); // Initialize with current inc
  const [account, setAccount] = useState(""); // Initialize with current address
  const [statusupdate, setStatusupdate] = useState(""); // Initialize with current mobile number
  const [reportedDate, setReportedDate] = useState('');
  const [bridgeDeatils, setBridgeDeatils] = useState('');
  const [businessImpact, setBusinessImpact] = useState("");
  const [workAround, setWorkAround] = useState("");
  const [notificationManager, setNotificationManager] = useState("");
  const [status, setStatus] = useState("");
  const [incidentDetails, setIncidentDetails] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [loginForm, SetLoginForm] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [whatsapp, Setwhatsapp] = useState(false);
  const [autoFocusField, setAutoFocusField] = useState("incNumber");
  const phoneNumber = "7772980155"; // Replace with your WhatsApp phone number
  const data = ("Below Are Details for raised INC" + "\n" + "incNumber:- " + incNumber + "\n" + "bridgeDeatils:-" + bridgeDeatils); // Replace with your message or data



  const switchFocus = (field) => {
    setAutoFocusField(field);
  };
  const handleIncNumber = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIncNumber(e.target.value);
  };
  
  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };
  
  const handleStatusupdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStatusupdate(e.target.value);
  };
  
  const handleBridgeDeatils = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBridgeDeatils(e.target.value);
  };
  
  const handleBusinessImpact = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBusinessImpact(e.target.value);
  };
  
  const handleWorkAround = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWorkAround(e.target.value);
  };
  
  const handleStatus = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus(e.target.value);
  };
  //  const inputRef = useRef(null);


  const handleChange = (event) => {
    setSelectedOption(event.target.value);

  };


  function openLoginForm() {
    SetLoginForm(!loginForm);
    //navigate("/IncidentForm");
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    // Add your form submission logic here
    console.log('INC Number:', incNumber);
    console.log('Incident Details:', incidentDetails);
    //WhatsAppQRCode(7772980155,"jkll");
    //<WhatsAppQRCode phoneNumber={7772980155} data={"hello  hjk"} />
    // alert("hell");
    SetLoginForm(!loginForm);
    Setwhatsapp(!whatsapp);
  };




  const handleSearch = () => {
    // Perform search logic using the searchQuery state
    console.log('Searching for:', searchQuery);
  };

  const [formData, setFormData] = useState({
    selectOption: '',
    otherField: '',
  });

  const CrossIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

  const Container = styled.div`
    color: black;
    margin: 20px auto;
    padding: 20px;
    width: 100%;
    max-width: 10000px;
    background-color: #faf9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;


  // Function to generate WhatsApp message link
  const generateWhatsAppLink = () => {
    // Construct your WhatsApp message link with the phone number and data
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(data)}`;
  };

  // const handleKeyDown =(e)=>
  // {
  //   e.preventDefault();
  //   inputRef.current.focus();
  // }

  const whatsappLink = generateWhatsAppLink();
  return (

    <Container style={{ marginLeft: '100px' }}>

      <CrossIcon onClick={raiseNewInc}>X</CrossIcon>

      {/* <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="primary" id="button-addon2" onClick={handleSearch}>
        Search
      </Button>
    </InputGroup> */}


      {loginForm && (<div>

        <h4>Please Enter Incident Details</h4>


        <Form onSubmit={handleSubmit}>

          <Row className="mb-3">
            <Col>
              <Form.Label>Inc Number</Form.Label>
              <Form.Control type="text" placeholder="Please Enter Inc Number"
                //  ref={inputRef}

              value={incNumber}
                onChange={handleIncNumber}
                autoFocus={autoFocusField === "incNumber"}
                  onFocus={() => switchFocus("incNumber")}

              />
            </Col>
            <Col>
              <Form.Label>Account</Form.Label>
              <Form.Select custom>
                <option value="" disabled>Please select</option>
                <option value="1">Three Ireland</option>
                <option value="2">UK</option>

              </Form.Select>
            </Col>

          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Label>Status Upadate/Next Step</Form.Label>
              <Form.Control type="text" placeholder="Enter Status Upadate/Next step"
                value={statusupdate}
                onChange={handleStatusupdate}
                
                autoFocus={autoFocusField === "statusupdate"}
                  onFocus={() => switchFocus("statusupdate")}
              />
            </Col>
            <Col>
              <Form.Label>Add Status Update</Form.Label>
              <Form.Select custom onChange={handleChange}>
                <option value="" disabled>Please select</option>
                <option value="1">Open</option>

              </Form.Select>

            </Col>

          </Row>


          <Row className="mb-3">
            <Col>
              <Form.Label>Business Impact</Form.Label>
              <Form.Control type="text" placeholder="Wnter Business Impact"

              />
            </Col>
            <Col>
              <Form.Label>Work around</Form.Label>
              <Form.Control type="text" placeholder="Enter Work around" />
            </Col>

          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Notification Manager</Form.Label>
              <Form.Select custom>
                <option value="" disabled>Please select</option>
                <option value="1">Bharti</option>
                <option value="2">Amar</option>
                <option value="3">Sachin</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Issue Owned By</Form.Label>
              <Form.Select custom>
                <option value="" disabled>Please select</option>
                <option value="1">Amdocs</option>
                <option value="2">TechM</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label>Bridge deatils</Form.Label>

            <Form.Control type="text" placeholder="Enter Bridge deatils"
              onChange={handleBridgeDeatils}
            />
          </Row>
          <Button variant="Primary" type="submit" className="btn btn-primary" >Submit Deatils</Button>
        </Form>
      </div>)}

      {whatsapp && (
        <div>
          <h3>Scan QR Code to Send WhatsApp Message</h3>
          {/* Call the WhatsAppQRCode component with the phoneNumber and data props */}
          <QRCode value={whatsappLink} />
        </div>)
      }
    </Container>
  );
};

export default IncidentForm;