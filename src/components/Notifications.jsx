import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IncDetails from "./IncDetails.jsx";
import { Button } from 'react-bootstrap';
import IncidentForm from './IncidentForm.js';
import DesktopNotification from './DesktopNotification.jsx';
const Container = styled.div`
  background-color: #d3d3d3;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #00c3ffd9;
  padding: 12px;
`;

const HeaderContent = styled.span`
  color: white;
`;

const SearchAndContentWrp = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  height: 100%;
  width: 25%;
  margin: 0.5rem;
  background-color: white;
`;

const RightContent = styled.div``;

const ListOfInc = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const ParticularInc = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  margin: 10px;
  cursor: pointer;
`;

const ItemName = styled.div``;

const ItemId = styled.div``;

const ItemPriority = styled.div``;

const SearchField = styled.input`
  width: 100%;
  padding: 4px;
`;

export default function Notifications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentInc, setCurrentInc] = useState(null);
  const [newInc,setNewInc] = useState(false)
  const userData={
    userName:"Amar"
  }
  const IncDetailsData=[
    {
   IncNumber:112312,
   Account:"Three IreLand",
   Status:"Closed",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Bharti"
    },
    {
    IncNumber:112314,
    Account:"UK",
   Status:"Closed",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024 15:30",
   ReportedTime:"",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    },{
      IncNumber:112322,
     Account:"Three IreLand",
   Status:"open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Sachin"
    },
    {
      IncNumber:112315,
     Account:"UK ",
   Status:"Open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    },
    {
    IncNumber:112112,
    Account:"Three IreLand and UK",
   Status:"Open",
   IssueOwner:"Amdocs",
   ReportedDate:"20 feb 2024",
   ReportedTime:"15:30",
   IssueDescription:"this was genrted because ...",
   BusinessImpact:"this will effect ..",
   ImpactedApplication: "DSS, Tivoli",
   WorkAround:"Please kill job id",
   StatusUpdate:"...",
   NextUpdate:"15:30",
   priority:"p1",
   BridgeDeatils:"ww.joinbrifge",
   NotificationManager:"Amar"
    }
  ]

  

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = IncDetailsData.filter((item) =>
      item.IncNumber.toString().includes(value)
    );
    setSearchResults(filteredResults);
  };

  const handleCurrentInc = (incId) => {
    const filteringCurrentInc = IncDetailsData.filter(
      (detail) => detail.IncNumber === incId
    );
    setCurrentInc(filteringCurrentInc);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleCloseInc = () => {
    setCurrentInc(null);
  };

  function raiseNewInc (){
    setNewInc(!newInc);
    //navigate("/IncidentForm");
  }

  // useEffect(() => {
  //   const showNotification = () => {

        
  //           new Notification('Hello, World please check ');
  //   };

  //   const timer = setTimeout(showNotification, 1 * 6 * 1000); // 10 minutes in milliseconds

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {


    const timer = setInterval(() => {
      // Filter the IncDetailsData based on conditions
      const filteredIncidents = IncDetailsData.filter((incident) => {
        return (
          incident.Status === "Open" &&
          incident.NotificationManager === userData.userName
        );
      });

  

      // If there are matching incidents, show their IncNumbers in an alert
      if (filteredIncidents.length > 0) {
        const incNumbers = filteredIncidents
          .map((incident) => incident.IncNumber)
          .join(", ");
       // alert("Open Incidents for {userData.userName}: ${incNumbers}");
       // alert("these INC are in opened state  "+incNumbers);
       //new Notification("Hello World");
       new Notification("these INC are in opened state  "+incNumbers);
      }
    }, 1 * 6 * 1000); // 1 minute in milliseconds

    return () => clearInterval(timer); // Cleanup function to clear the timer
  }, []); // Empty dependency array, effect runs only once

   

  return (
    <Container>
      <Header>
        <HeaderContent>Incident Notifications</HeaderContent>
        <HeaderContent>Join Incident Bridge</HeaderContent>
      
      </Header>
      <SearchAndContentWrp>
        <LeftContent>
          <SearchField
            type="text"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={handleSearch}
          />
        <Button onClick={ raiseNewInc }>New INC</Button>
          <ListOfInc>
            {searchTerm === ""
              ? IncDetailsData.map((item) => (
                  <ParticularInc
                    key={item.IncNumber}
                    onClick={() => handleCurrentInc(item.IncNumber)}
                  >
                    <ItemName>{item.Account}</ItemName>
                    <ItemId>{item.IncNumber}</ItemId>
                    <ItemPriority>{item.priority}</ItemPriority>
                  </ParticularInc>
                ))
              : searchResults.map((item) => (
                  <ParticularInc
                    key={item.IncNumber}
                    onClick={() => handleCurrentInc(item.IncNumber)}
                  >
                    <ItemName>{item.Account}</ItemName>
                    <ItemId>{item.IncNumber}</ItemId>
                    <ItemPriority>{item.priority}</ItemPriority>
                  </ParticularInc>
                ))}
          </ListOfInc>
        </LeftContent>
        <RightContent>
          {currentInc && (
            <IncDetails data={currentInc} handleCloseInc={handleCloseInc} />
            
          )}
          {newInc && <IncidentForm raiseNewInc={ raiseNewInc}/>}
        </RightContent>
      </SearchAndContentWrp>
    </Container>
  );
}