import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import  {WhatsAppQRCode}  from './WhatsAppQRCode.jsx';
const IncidentForm = ({ raiseNewInc }) => {
  const [incNumber, setIncNumber] = useState('');
  const [incidentDetails, setIncidentDetails] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  

  const handleSubmit = (e) => {

    e.preventDefault();
    // Add your form submission logic here
    console.log('INC Number:', incNumber);
    console.log('Incident Details:', incidentDetails);
    WhatsAppQRCode(7772980155,"jkll");
    //<WhatsAppQRCode phoneNumber={7772980155} data={"hello  hjk"} />
   // alert("hell");
  };

  const [searchQuery, setSearchQuery] = useState('');

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



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <Container className="container mt-5"  style={{ marginLeft: '100px' }}>

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

      <h2>Please Enter Incident Details</h2>
     { //<CrossIcon onClick={handleCloseInc}>X</CrossIcon>
     
     }

      <Form onClick={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Inc Number</Form.Label>
            <Form.Control type="text" placeholder="Please Enter Inc Number" />
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
            <Form.Control type="text" placeholder="Enter Status Upadate/Next step" />
          </Col>
          <Col>
            <Form.Label>Add Status Update</Form.Label>
            <Form.Select custom value={selectedOption} onChange={handleChange}>
              <option value="" disabled>Please select</option>
              <option value="1">Open</option>
            </Form.Select>

          </Col>

        </Row>


        <Row className="mb-3">
          <Col>
            <Form.Label>Business Impact</Form.Label>
            <Form.Control type="text" placeholder="Wnter Business Impact" />
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
          <Form.Control type="text" placeholder="Enter Bridge deatils" />
        </Row>
        <Button variant="Primary" type="submit" className="btn btn-primary" >Submit Deatils</Button>
      </Form>
    </Container>
  );
};

export default IncidentForm;

