import React from "react";
import HeaderBar from "../components/HeaderBar";
import { Container, Row, Col } from "react-bootstrap";
import HashtagBased from "../Dashboard/HashtagBased";
import Tweets from "../Dashboard/Tweets";
import CityBased from "../Dashboard/CityBased";
import data from "../data.json";
const database = data;

const Dashboard = () => {
  return (
    <>
      <HeaderBar />

      <Container fluid className="h-100">
        <Row className="h-40">
          <Col md={6} className="border">
            <Container fluid className="h-100">
              <CityBased database={database} />
            </Container>
          </Col>
          <Col md={6} className="border">
            <Container fluid className="h-100">
              <HashtagBased database={database} />
            </Container>
          </Col>
        </Row>
        <div
          style={{
            overflow: "auto",
            maxHeight: "100%",
            whiteSpace: "pre-wrap",
            marginTop: "10px",
            backgroundColor:"#E7EDF0"
          }}
        >
          <Row className="h-60 justify-content-center align-items-center">
            <Col md={5} className="border-primary">
              <Container fluid className="h-100">
                <Tweets database={database} />
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
