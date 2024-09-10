import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs'); // Replace with your API endpoint
        setJobs(response.data);
      } catch (err) {
        setError('Error fetching job data.');
      }
    };

    fetchJobs();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleApply = async (jobId) => {
    try {
      await axios.post(`/api/apply/${jobId}`);
      alert('Applied successfully!');
    } catch (err) {
      setError('Error applying for job.');
    }
  };

  return (
    <Container className="py-4">
      {error && (
        <Row>
          <Col md={12}>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}
      <Row>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={job.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">{job.title}</Card.Title>
                  <Card.Text>
                    <strong>Role:</strong> {job.role} <br />
                    <strong>Skills:</strong> {job.skills} <br />
                    <strong>Experience:</strong> {job.experience} <br />
                    <strong>Description:</strong> {job.description}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-3"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Job
                  </Button>
                  <Button
                    variant="link"
                    className="mt-3 d-block"
                    as={Link}
                    to={`/job/${job.id}`}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col md={12}>
            <Alert variant="info">No jobs available.</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Jobs;
