import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminHome = () => {
  // Placeholder data, you can replace these with actual data fetched from your API
  const numFreelancers = 120; // Number of freelancers
  const numJobs = 45; // Number of jobs
  const numClients = 30; // Number of clients

  // Placeholder functions for button click events
  const handleFreelancersClick = () => {
    alert("Number of Freelancers: " + numFreelancers);
  };

  const handleJobsClick = () => {
    alert("Number of Jobs: " + numJobs);
  };

  const handleClientsClick = () => {
    alert("Number of Clients: " + numClients);
  };

  return (
    <>
      <header className="App-header">
        <Container className="p-4">
          <Row className="flex-wrap mt-5 py-5">
            <Col md={6} className="p-2">
              <h1 className="text-2xl font-bold mb-4">
                Welcome to the Admin Dashboard
              </h1>
              <p className="custom-paragraph">
                Manage your administrative tasks efficiently. Use the tools and sections provided to handle user data, manage content, and oversee the platform.
              </p>
            </Col>
            <Col md={6} className="p-2">
              {/* Card Components */}
              <Row>
                <Col md={4} className="p-2">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>Number of Freelancers</Card.Title>
                      <Card.Text>
                        {/* Placeholder for the card content, removed raw data */}
                      </Card.Text>
                      <Button variant="primary" onClick={handleFreelancersClick}>
                        View Freelancers
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="p-2">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>Number of Jobs</Card.Title>
                      <Card.Text>
                        {/* Placeholder for the card content, removed raw data */}
                      </Card.Text>
                      <Button variant="primary" onClick={handleJobsClick}>
                        View Jobs
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="p-2">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>Number of Clients</Card.Title>
                      <Card.Text>
                        {/* Placeholder for the card content, removed raw data */}
                      </Card.Text>
                      <Button variant="primary" onClick={handleClientsClick}>
                        View Clients
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default AdminHome;
