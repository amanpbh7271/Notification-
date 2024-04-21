import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col } from 'react-bootstrap';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
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
const CrossIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default function IncDetails({ data, handleCloseInc }) {
  //   {data.map((item) => (
  console.log(data);

  const [incNumber, setIncNumber] = useState(""); // Initialize with current inc
  const [account, setAccount] = useState(""); // Initialize with current address
  const [statusupdate, setStatusupdate] = useState(""); // Initialize with current mobile number
  const [reportedDate,setReportedDate] = useState('');
  const [bridgeDeatils,setBridgeDeatils] =useState("");
  const [businessImpact,setBusinessImpact] = useState("");
  const [workAround,setWorkAround] = useState("");
  const [notificationManager,setNotificationManager] =useState("");
  const [status,setStatus] =useState("");


  useEffect(() => {
    if (data) {
      setIncNumber(data?.[0]?.IncNumber);
      setAccount(data?.[0]?.Account);
      setStatusupdate(data?.[0]?.StatusUpdate);
      setReportedDate(data?.[0]?.ReportedDate);
      setBridgeDeatils(data?.[0]?.BridgeDeatils);
      setBusinessImpact(data?.[0]?.BusinessImpact);
      setWorkAround(data?.[0]?.WorkAround);
      setNotificationManager(data?.[0]?.NotificationManager);
    setStatus(data?.[0]?.Status);
    }
  }, [data]);


  const handleAccountChange = (e) => setAccount(e.target.value);
  const handleStatusupdate = (e) => setStatusupdate(e.target.value);
  const handleBridgeDeatils = (e) => setBridgeDeatils(e.target.value);
  const handleBusinessImpact = (e) => setBusinessImpact(e.target.value);
  const handleWorkAround = (e)=> setWorkAround(e.target.value);
  const handleStatus = (e)=> setStatus(e.target.value);
  const hadnlenotificationManager = (e) => setNotificationManager(e.target.value);

  // Event handlers for input changes
  //const handleNameChange = (e) => setName(e.target.value);
  // const handleAddressChange = (e) => setAccount(e.target.value);
  // const handleMobileChange = (e) => setStatusupdate(e.target.value);
 


  const handleSubmit = (e) => {
    e.preventDefault();
    // Send update request to the server
    // You can use fetch, axios, or any other library for making HTTP requests
    // Example:
    // fetch('/api/updateUserInfo', {
    //   method: 'POST',
    //   body: JSON.stringify({ name, address, mobile }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle response
    // })
    // .catch(error => {
    //   // Handle error
    // });
  };

  return (
    <Container className="container mt-3" style={{ marginLeft: '100px' }}>
      <CrossIcon onClick={handleCloseInc}>X</CrossIcon>
      
      <Form style={{ marginTop: '20px'}}>
     
          <Row className="mb-3">
          <Col>
            <Form.Label>Inc Number</Form.Label>
            <Form.Control type="text" value={incNumber} />
          </Col>
          <Col>
            <Form.Label>Account</Form.Label>
            <Form.Control type="text" value={account} onChange={handleAccountChange}/>
          </Col>

        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Status Upadate/Next Step</Form.Label>
            <Form.Control type="text" value={statusupdate} onChange={handleStatusupdate}/>
          </Col>
          <Col>
            <Form.Label>Add Status Update</Form.Label>
            <Form.Control type="text" value={status} onChange={handleStatus}/>
            {/* <Form.Select custom >
              <option value="" disabled>Please select</option>
              <option value="1">Open</option>
              <option value="2">Close</option>
            </Form.Select> */}

          </Col>

        </Row>


        <Row className="mb-3">
          <Col>
            <Form.Label>Business Impact</Form.Label>
            <Form.Control type="text" value={businessImpact} onChange={handleBusinessImpact}/>
          </Col>
          <Col>
            <Form.Label>Work around</Form.Label>
            <textarea
                        rows={4} // Set the number of visible text lines
                        cols={20} // Set the number of visible text columns
                        
                   value={workAround} onChange={handleWorkAround}/>
          </Col>

        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Notification Manager</Form.Label>
            <Form.Select  value={notificationManager} onChange={hadnlenotificationManager}>
              <option value="" disabled>please select</option>
              <option value="Bharti">Bharti</option>
              <option value="Amar">Amar</option>
              <option value="Sachin">Sachin</option>
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
          <Col>
          <Form.Label>Bridge details</Form.Label>
          <Form.Control type="text" value={bridgeDeatils} onChange={handleBridgeDeatils}/>
          </Col>
          <Col>
            <Form.Label>Issue Created Date</Form.Label>
            <Form.Control type="Text" value={reportedDate}/>
          </Col>
        </Row>
        <Button variant="Primary" type="submit" className="btn btn-primary" >Update Deatils</Button>
      </Form>
    

    </Container>
  );
}