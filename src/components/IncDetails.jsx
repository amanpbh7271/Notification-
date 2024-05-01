import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Row, Col } from 'react-bootstrap';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from "axios";
import QRCode from "qrcode.react";
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
  console.log('data in indetails '+data);

  const [incNumber, setIncNumber] = useState(""); // Initialize with current inc
  const [account, setAccount] = useState(""); // Initialize with current address
  const [preStatusUpdate, setPreStatusUpdate] = useState("");
  const [statusupdate, setStatusupdate] = useState(""); // Initialize with current mobile number
  const [reportedDate,setReportedDate] = useState('');
  const [bridgeDeatils,setBridgeDeatils] =useState("");
  const [businessImpact,setBusinessImpact] = useState("");
  const [workAround,setWorkAround] = useState("");
  const [notificationManager,setNotificationManager] =useState("");
  const [status,setStatus] =useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const formattedDate = currentDateTime.toLocaleDateString(); // Get formatted date
  const formattedTime = currentDateTime.toLocaleTimeString(); // Get formatted time
  const [priority,setPriority] = useState("");
  const [issueOwnedBy,setIssueOwnedBy] =useState("");
  const [phoneNumber,setPhoneNumber] = useState(""); //8527289988 +353872484431Replace with your WhatsApp phone number
  const [incForm, SetIncForm] = useState(true);
  const [whatsappForUpdate, SetwhatsappUpdate] = useState(false);

  const dataforWhatsapp = ("*Below are Details for raised INC*" + "\n" + "*IncNumber*:- " + incNumber +"\n*Account* :-"+account +
  "\n*Updated/next Status*:-"+statusupdate+"\n*Status*:-" + status+
  "\n*Business impact*:-"+businessImpact + "\n*Work Around*:-"+workAround +
  "\n*Notification Manager*:-"+ notificationManager+"\n*Issue Owned By*:-"+issueOwnedBy+
   "\n"+"*bridgeDeatils*:-" + bridgeDeatils+"\n*Date*:-"+ formattedDate+"\n*Time*:-"+ formattedTime+
   "\n*priority*"+priority
  ); // Replace with your message or data
 
  

  useEffect(() => {
   
      const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
      setPhoneNumber(storedUserDetails.mobnumber);
      alert(storedUserDetails.mobnumber);
  
    
    
    if (data) {
      setIncNumber(data?.[0]?.notifications.incNumber);
      setBridgeDeatils(data?.[0]?.notifications.bridgeDetails);
      setAccount(data?.[0]?.notifications.account);
     // setStatusupdate(data?.[0]?.notifications.nextUpdate);
      setReportedDate(data?.[0]?.ReportedDate);
      setPreStatusUpdate(data?.[0]?.notifications.nextUpdate);
      setBusinessImpact(data?.[0]?.notifications.businessImpact);
      setWorkAround(data?.[0]?.notifications.workAround);
      setNotificationManager(data?.[0]?.notifications.manager);
      setStatus(data?.[0]?.notifications.status);
      setPriority(data?.[0]?.notifications.priority);
      setIssueOwnedBy(data?.[0]?.notifications.issueOwnedBy);
    }
  }, [data]);

 
  const handlePriorty = (e) =>{
    setPriority(e.target.value);
  }
  const HandleIssueOwnedBy = (e) => {

    setIssueOwnedBy(e.target.value);
  };
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
    const updatedStatus = statusupdate + "/n" + preStatusUpdate; 
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/saveInc',
      data: {
        "incNumber": incNumber,
        "account": account,
        "nextUpdate": updatedStatus,
        "status":status,
        "businessImpact":businessImpact,
        "workAround":workAround,
        "manager": notificationManager,
        "issueOwnedBy": issueOwnedBy,
        "bridgeDetails": bridgeDeatils,
        "priority": priority,
        "date": formattedDate,
        "time": formattedTime,
        
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    SetIncForm(!incForm);
    SetwhatsappUpdate(!whatsappForUpdate);
    
  };

    // Function to generate WhatsApp message link
    const generateWhatsAppLink = () => {
      // Construct your WhatsApp message link with the phone number and data
      return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(dataforWhatsapp)}`;
    };
  
    const whatsappLink = generateWhatsAppLink();

  return (
    <Container className="container mt-3" style={{ marginLeft: '100px' }}>
      <CrossIcon onClick={handleCloseInc}>X</CrossIcon>
      
      {incForm && (<div>
      <Form style={{ marginTop: '20px'}} onSubmit={handleSubmit}>
     
          <Row className="mb-3">
          <Col>
            <Form.Label>Inc Number</Form.Label>
            <Form.Control type="text" value={incNumber} />
          </Col>
          <Col>
            <Form.Label>Account</Form.Label>
            <Form.Select  value={account} onChange={handleAccountChange}>
              <option value="" disabled>please select</option>
              <option value="Three Ireland">Three Ireland</option>
                <option value="UK">UK</option>
            </Form.Select>
          </Col>

        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Status Upadate/Next Step</Form.Label>
            <Form.Control type="text" value={statusupdate} onChange={handleStatusupdate}/>
          </Col>
          <Col>
            <Form.Label>Add Status Update</Form.Label>
            <Form.Select type="text" 
            custom value={status}
            onChange={handleStatus}>
              <option value="" disabled>Please select</option>
              <option value="Open">Open</option>
              <option value="Close">Close</option>
            
             </Form.Select>
            

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
            <Form.Select custom
             value={issueOwnedBy}
             onChange={HandleIssueOwnedBy}
            >
              <option value="" disabled>Please select</option>
              <option value="Amdocs">Amdocs</option>
              <option value="TechM">TechM</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
          <Form.Label>Bridge details</Form.Label>
          <Form.Control type="text" value={bridgeDeatils} onChange={handleBridgeDeatils}/>
          </Col>
          <Col>
            
            <Form.Label>Priority</Form.Label>
              <Form.Select custom
               value={priority}
               onChange={handlePriorty}
              >
                <option value="" disabled>Please select</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </Form.Select>
          </Col>
        </Row>
        <Button variant="Primary" type="submit" className="btn btn-primary" >Update Datails</Button>
      </Form>
     
    </div>)}
      
    { whatsappForUpdate && (
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
}