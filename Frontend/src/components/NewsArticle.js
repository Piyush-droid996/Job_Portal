import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsSection.css';
import interview from "../assets/images/GroupInterview.jpg";
import interview_pre from "../assets/images/interviewPrepare.jpg";
import Job from "../assets/images/Job_Vacancy.jpg";

const NewsArticle = () => {
  return (
    <Container className="news-section style-two">
      <Row className="sec-title text-center mb-5">
        <Col>
          <h2>Recent News Articles</h2>
          <div className="text">Fresh job-related content.</div>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src={Job} 
              alt="Discover Your Dream Job" 
              className="custom-card-img"
            />
            <Card.Body>
              <ul className="post-meta list-unstyled mb-2">
                {/* <li>12 Comments</li> */}
              </ul>
              <Card.Title><Link to="/blog/1">Discover Your Dream Job</Link></Card.Title>
              <Card.Text>
                Explore the latest job opportunities that match your skills and interests. 
                Find the perfect job for you that helps you move forward in your career.
              </Card.Text>
              <Link className="read-more" to="/blog/1">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src={interview} 
              alt="Master Your Job Interviews" 
              className="custom-card-img"
            />
            <Card.Body>
              <ul className="post-meta list-unstyled mb-2">
                {/* <li>8 Comments</li> */}
              </ul>
              <Card.Title><Link to="/blog/2">Master Your Job Interviews</Link></Card.Title>
              <Card.Text>
                Get expert tips and strategies to excel in your job interviews. 
                Make a great impression and land your dream job.
              </Card.Text>
              <Link className="read-more" to="/blog/2">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="mb-4">
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src={interview_pre} 
              alt="How to Prepare for Interviews Like a Pro" 
              className="custom-card-img"
            />
            <Card.Body>
              <ul className="post-meta list-unstyled mb-2">
                {/* <li>5 Comments</li> */}
              </ul>
              <Card.Title><Link to="/blog/3">How to Prepare for Interviews Like a Pro</Link></Card.Title>
              <Card.Text>
                Learn essential interview preparation techniques that will boost your confidence.
              </Card.Text>
              <Link className="read-more" to="/blog/3">
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsArticle;
