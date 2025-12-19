import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ModalComponent from '../components/ModalComponent'; // Adjust the path as necessary
import employee from "../assets/person.png";
import bubble from "../assets/bubble.mp4"; // Adjust the path if necessary

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 40px; /* Ensure space for the news ticker at the bottom */
  margin-top: 15px;
  margin-left: 220px; /* Adjust margin-left as per your layout */
  position: relative; /* Add position relative */
`;

const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ParentCard = styled.div`
  width: 100%;
  max-width: 800px; /* Set a max-width to control card spacing */
  height: 250px;
  margin: auto;
  padding: 20px;
  background:linear-gradient(to left,#F2D7FA,#FFECB5,#FFECB5,#F2D7FA);
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 1px;
`;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Front = styled(CardFace)`
  background:linear-gradient(to left,#D279EE, #FBC390, #FBC390, #D279EE);
`;

const Back = styled(CardFace)`
  background:linear-gradient(to left,#D279EE, #FBC390, #FBC390, #D279EE);
  transform: rotateY(180deg);
`;

const NewsTicker = styled.div`
  width: 79%;
  height: 40px;
  background: linear-gradient(to left,#D279EE, #FBC390, #FBC390, #D279EE);
  position: fixed;
  bottom: 130px;
  left: 255px;
  z-index: 1000;
  overflow: hidden;
  white-space: nowrap;
  right: 5px;
  border-radius: 1rem;
`;

const NewsText = styled.span`
  font-size: 23px;
  display: inline-block;
  padding-left: 100%; /* Moves the text off screen initially */
  animation: marquee 15s linear infinite;

  @keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }
`;

const employees = [
  { code: 'E001', name: 'Arjun', designation: 'Developer' },
  { code: 'E002', name: 'Joshua', designation: 'Manager'},
  { code: 'E003', name: 'Afina',designation: 'Developer' },
  { code: 'E004', name: 'Varun',designation: 'Developer' },
  { code: 'E005', name: 'Adhi',designation: 'supervisor'},
  { code: 'E006', name: 'Adhira',designation: 'Developer' },
  { code: 'E007', name: 'Agaran',designation: 'Developer' },
  { code: 'E008', name: 'Thanigai',designation: 'Developer' },
  { code: 'E009', name: 'Agayaazh',designation: 'Developer' },
  { code: 'E010', name: 'Yaazhan',designation: 'Developer' },
  { code: 'E011', name: 'Pragya',designation: 'Developer' },
  { code: 'E012', name: 'Catherine',designation: 'Developer' },
  { code: 'E013', name: 'Naveen',designation: 'Supervisor' },
  { code: 'E014', name: 'Teju',designation: 'Developer' },
  { code: 'E015', name: 'Anita',designation: 'Developer' },
  { code: 'E016', name: 'Mozhiyazhi',designation: 'Developer' },
  { code: 'E017', name: 'Charu',designation: 'Developer' },
  { code: 'E018', name: 'Divya',designation: 'Developer' },
  { code: 'E019', name: 'Arun',designation: 'Developer' },
  { code: 'E020', name: 'Vishwa',designation: 'Developer' },
];

const presentEmployees = [
  { code: 'E001', name: 'Arjun' ,designation: 'Developer'},
  { code: 'E002', name: 'Joshua', designation: 'Manager' },
  { code: 'E004', name: 'Varun',designation: 'Developer' },
  { code: 'E005', name: 'Adhi',designation: 'supervisor' },
  { code: 'E006', name: 'Adhira',designation: 'Developer' },
  { code: 'E007', name: 'Agaran',designation: 'Developer' },
  { code: 'E008', name: 'Thanigai',designation: 'Developer' },
  { code: 'E009', name: 'Agayaazh',designation: 'Developer' },
  { code: 'E012', name: 'Catherine',designation: 'Developer' },
  { code: 'E013', name: 'Naveen',designation: 'supervisor' },
  { code: 'E014', name: 'Teju',designation: 'Developer' },
  { code: 'E015', name: 'Anita',designation: 'Developer' },
  { code: 'E016', name: 'Mozhiyazhi',designation: 'Developer' },
  { code: 'E018', name: 'Divya',designation: 'Developer' },
  { code: 'E019', name: 'Arun',designation: 'Developer' },
  { code: 'E020', name: 'Vishwa',designation: 'Developer' },
];

const absentEmployees = [
  { code: 'E003', name: 'Afina',designation: 'Developer' },
  { code: 'E010', name: 'Yaazhan' ,designation: 'Developer'},
  { code: 'E011', name: 'Pragya',designation: 'Developer' },
  { code: 'E017', name: 'Charu',designation: 'Developer' },
];

const newsItems = [
  "Empowering Efficiency Through Attendance Solutions",
  "Unlocking Productivity with Precision Attendance",
  "Effortless Attendance, Seamless Management",
  "Streamlined Attendance Tracking for Modern Teams",
  "Attendance Made Simple, Productivity Enhanced",
  "Smart Attendance Management, Smarter Business",
  "Attendance Excellence, Every Time",
  "Transforming Attendance into Opportunity",
  "Attendance Redefined: Precision, Punctuality, Progress",
  "Driving Success Through Attendance Innovation",
];

export const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (data, title) => {
    setModalData(data);
    setModalTitle(title);
    setModalIsOpen(true);
  };

  return (
    <DashboardContainer>
      <VideoBackground autoPlay loop muted>
        <source src={bubble} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      <ParentCard>
        <CardContainer onClick={() => openModal(employees, "TOTAL COUNT")}>
          <Card>
            <Front>
              <h1 className="text-center" style={{ fontWeight: "bold", marginTop: "3vh", margin: "auto", padding: "10px", fontFamily: "initial", fontSize: "30px" }}>
                STAFF TOTAL
              </h1>
            </Front>
            <Back>
              <img src={employee} alt="Employee" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              <h3 className="text-center">20</h3>
            </Back>
          </Card>
        </CardContainer>

        <CardContainer onClick={() => openModal(presentEmployees, "PRESENT")}>
          <Card>
            <Front>
              <h1 className="text-center" style={{ fontWeight: "bold", marginTop: "3vh", margin: "auto", padding: "10px", fontFamily: "initial", fontSize: "30px" }}>
                LIVE DUTY
              </h1>
            </Front>
            <Back>
              <img src={employee} alt="Employee" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              <h3 className="text-center">16</h3>
            </Back>
          </Card>
        </CardContainer>

        <CardContainer onClick={() => openModal(absentEmployees, "ABSENT")}>
          <Card>
            <Front>
              <h1 className="text-center" style={{ fontWeight: "bold", marginTop: "3vh", margin: "auto", padding: "10px", fontFamily: "initial", fontSize: "30px" }}>
                OFF DUTY
              </h1>
            </Front>
            <Back>
              <img src={employee} alt="Employee" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              <h3 className="text-center">04</h3>
            </Back>
          </Card>
        </CardContainer>
      </ParentCard>

      <ModalComponent
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        data={modalData}
        title={modalTitle}
      />

      <NewsTicker>
        {newsItems.map((item, index) => (
          <NewsText key={index}>{item}</NewsText>
        ))}
      </NewsTicker>
    </DashboardContainer>
  );
};
