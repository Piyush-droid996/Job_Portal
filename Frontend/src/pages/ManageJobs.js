import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [newJob, setNewJob] = useState({
    title: '',
    role: '',
    skills: '',
    experience: '',
    description: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobs(response.data);
      } catch (err) {
        setError('Error fetching job data.');
      }
    };

    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/jobs', newJob);
      setNewJob({ title: '', role: '', skills: '', experience: '', description: '' });
      alert('Job added successfully!');
      // Refresh job list or update state accordingly
    } catch (err) {
      setError('Error adding job.');
    }
  };

  const handleDeleteJob = async (jobId) => {
    try {
      await axios.delete(`/api/jobs/${jobId}`);
      alert('Job deleted successfully!');
      setJobs(jobs.filter((job) => job.id !== jobId));
    } catch (err) {
      setError('Error deleting job.');
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Add New Job</h2>
          <Form onSubmit={handleAddJob}>
            <Form.Group controlId="formJobTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newJob.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={newJob.role}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                name="skills"
                value={newJob.skills}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={newJob.experience}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formJobDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newJob.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Job
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Current Jobs</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {jobs.map((job) => (
            <Card key={job.id} className="mb-3">
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>
                  <strong>Role:</strong> {job.role} <br />
                  <strong>Skills:</strong> {job.skills} <br />
                  <strong>Experience:</strong> {job.experience} <br />
                  <strong>Description:</strong> {job.description}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteJob(job.id)}
                >
                  Delete Job
                </Button>
                {/* Add edit functionality as needed */}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ManageJobs;
