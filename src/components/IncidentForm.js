import React, { useState, useRef, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import QRCode from "qrcode.react";

import axios from 'axios';

const IncidentForm = ({ raiseNewInc }) => {

  const [incNumber, setIncNumber] = useState(""); // Initialize with current inc
  const [account, setAccount] = useState(""); // Initialize with current address
  const [statusupdate, setStatusupdate] = useState(""); // Initialize with current mobile number
  const [bridgeDeatils, setBridgeDeatils] = useState('');
  const [businessImpact, setBusinessImpact] = useState("");
  const [workAround, setWorkAround] = useState("");
  const [notificationManager, setNotificationManager] = useState("");
  const [status, setStatus] = useState("");
  const [loginForm, SetLoginForm] = useState(true);
  const [whatsapp, Setwhatsapp] = useState(false);
  const [autoFocusField, setAutoFocusField] = useState("incNumber");
  const [phoneNumber,SetPhoneNumber] = useState(""); //8527289988 +353872484431Replace with your WhatsApp phone number
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [issueOwnedBy,setIssueOwnedBy] =useState("");
  const formattedDate = currentDateTime.toLocaleDateString(); // Get formatted date
  const formattedTime = currentDateTime.toLocaleTimeString(); // Get formatted time
  const [priority,setPriority] = useState("");

  const data = ("*Below are Details for raised INC*" + "\n" + "*IncNumber*:-" + incNumber +"\n*Account* :-"+account +
  "\n*Updated/next Status*:-"+statusupdate+"\n*Status*:-" + status+
  "\n*Business impact*:-"+businessImpact + "\n*Work Around*:-"+workAround +
  "\n*Notification Manager*:-"+ notificationManager+"\n*Issue Owned By*:-"+issueOwnedBy+
   "\n"+"*bridgeDeatils*:-" + bridgeDeatils+"\n*Date*:-"+ formattedDate+"\n*Time*:-"+ formattedTime+"\n*Priority*:-"+priority); // Replace with your message or data
 
  const switchFocus = (field) => {
    setAutoFocusField(field);
  };
  const handleIncNumber = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIncNumber(e.target.value);
  };
  const HandleIssueOwnedBy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIssueOwnedBy(e.target.value);
  };


  
  const handlenotificationManager = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setNotificationManager(e.target.value);
  };
  
  
  const handleAccount = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAccount(e.target.value);
  };
  
  const handlePriorty = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    setPriority(e.target.value);
  }
  
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

  useEffect(() => {
    const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
    SetPhoneNumber(storedUserDetails.mobnumber);
    // alert(storedUserDetails.mobnumber);

  });


  const handleSubmit = (e) => {



    e.preventDefault();
    // Add your form submission logic here
    debugger;
    console.log('stusupdate :', statusupdate);
    console.log('Formetted time :' , formattedTime);
    // const newPreUpdate = {
    //   message: statusupdate,
    //   timestamp: formattedTime,
    // };

    // setPreUpdates(preUpdates => [...preUpdates, newPreUpdate]);
    
    // console.log("preUpdates"+preUpdates);
    // console.log("newPreUpdate"+newPreUpdate);
   
  
  
    // Call addObjectToData with the new object to add it to data state
  


    //console.log("preupdatess message "+ preUpdates);
    setTimeout(() => {
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/saveInc',
      data: {
        "incNumber": incNumber,
        "account": account,
        "nextUpdate": statusupdate,
        "status": status,
        "businessImpact":businessImpact,
        "workAround":workAround,
        "manager": notificationManager,
        "issueOwnedBy":issueOwnedBy,
        "bridgeDetails": bridgeDeatils,
        "priority": priority,
        "date": formattedDate,
        "time": formattedTime,    
         "preUpdates": [
          {
            "timestamp": formattedTime,
            "message": statusupdate
          }
        ]
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

    SetLoginForm(!loginForm);
    Setwhatsapp(!whatsapp);
  }, 100);
  };


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
                 required
              />
            </Col>
            <Col>
              <Form.Label>Account</Form.Label>
              <Form.Select custom 
              value={account}
              onChange={handleAccount}
              autoFocus={autoFocusField === "setAccount"}
                onFocus={() => switchFocus("setAccount")}>

                <option value="" disabled>Please select</option>
                <option value="Three Ireland">Three Ireland</option>
                <option value="UK">UK</option>

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
              <Form.Select custom value={status}
              onChange={handleStatus}
              autoFocus={autoFocusField === "setStatus"}
                onFocus={() => switchFocus("setStatus")}
                >
                <option value="" disabled>Please select</option>
                <option value="Open">Open</option>

              </Form.Select>

            </Col>

          </Row>


          <Row className="mb-3">
            <Col>
              <Form.Label>Business Impact</Form.Label>
              <Form.Control type="text" placeholder="Wnter Business Impact"

value={businessImpact}
onChange={handleBusinessImpact}

autoFocus={autoFocusField === "businessImpact"}
  onFocus={() => switchFocus("businessImpact")}

              />
            </Col>
            <Col>
              <Form.Label>Work around</Form.Label>
              <Form.Control type="text" placeholder="Enter Work around" 
              value={workAround}
              onChange={handleWorkAround}
              
              autoFocus={autoFocusField === "workAround"}
                onFocus={() => switchFocus("workAround")}
              />
            </Col>

          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Notification Manager</Form.Label>
              <Form.Select custom 
              value={notificationManager}
              onChange={handlenotificationManager}
              autoFocus={autoFocusField === "notificationManager"}
                onFocus={() => switchFocus("notificationManager")}
              >
                <option value="" disabled>Please select</option>
                <option value="Bharti">Bharti</option>
                <option value="Amar">Amar</option>
                <option value="Sachin">Sachin</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Issue Owned By</Form.Label>
              <Form.Select custom
               value={issueOwnedBy}
               onChange={HandleIssueOwnedBy}
               autoFocus={autoFocusField === "issueOwnedBy"}
                 onFocus={() => switchFocus("issueOwnedBy")}
              >
                <option value="" disabled>Please select</option>
                <option value="Amdocs">Amdocs</option>
                <option value="TechM">TechM</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
          <Col>
            <Form.Label>Bridge deatils</Form.Label>

            <Form.Control type="text" placeholder="Enter Bridge deatils"
                   value={bridgeDeatils}
                   onChange={handleBridgeDeatils}
                   
                   autoFocus={autoFocusField === "bridgeDeatils"}
                     onFocus={() => switchFocus("bridgeDeatils")}
                
            />
            </Col>
            <Col>
              <Form.Label>Priority</Form.Label>
              <Form.Select custom
               value={priority}
               onChange={handlePriorty}
               autoFocus={autoFocusField === "priority"}
                 onFocus={() => switchFocus("priority")}
              >
                <option value="" disabled>Please select</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </Form.Select>
              
            </Col>
          </Row>
          <Button variant="Primary" type="submit" className="btn btn-primary" >Submit Details</Button>
        </Form>
      </div>)}

      {whatsapp && (
        <div>
          <h3>Scan QR Code to Send WhatsApp Message</h3>
          {/* Call the WhatsAppQRCode component with the phoneNumber and data props */}
          <QRCode value={whatsappLink} />
            
            <h3>Below are submited details ....</h3>
            <table style={{ borderCollapse: 'collapse', border: '1px solid black',margin: 'auto' }} >
          <tbody>
            
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"incNumber"}:</strong> {incNumber}
              </td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"account"}:</strong> {account}
              </td>
            </tr>
            
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"nextUpdate"}:</strong> {statusupdate}
              </td>
              <td  colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"status"}:</strong> {status}
              </td>
            </tr>
            
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"businessImpact"}:</strong> {businessImpact}
              </td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"workAround"}:</strong> {workAround}
              </td>
            </tr>
            
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"manager"}:</strong> {notificationManager}
              </td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"issueOwnedBy"}:</strong> {issueOwnedBy}
              </td>
            </tr>
           
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"bridgeDetails"}:</strong> {bridgeDeatils}
              </td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"priority"}:</strong> {priority}
              </td>
            </tr>
           
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"date"}:</strong> {formattedDate}
              </td>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <strong>{"Time"}:</strong> {formattedTime}
              </td>
            </tr>
          </tbody>
        </table>
        </div>)
      }
    </Container>
  );
};

export default IncidentForm;