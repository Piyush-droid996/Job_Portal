import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './BlogSection.css';
import interview from '../assets/images/GroupInterview.jpg';
import interview_pre from '../assets/images/interviewPrepare.jpg';
import Job from '../assets/images/Job_Vacancy.jpg';

const Blog = () => {
  const { id } = useParams();

  const blogContent = {
    1: {
      title: "Discover Your Dream Job: ",
      
    //   comments: "0 Comments", 
      content: (
        <>
  <p>Finding a job that aligns with your passions is key to a fulfilling career.</p>

  <p>Understand your strengths and interests: Knowing what you're good at and what you enjoy helps in finding a career that feels rewarding.
    Research the job market and industry trends: Stay informed about which industries are growing and what skills are in demand to make strategic career choices.
     Tailor your resume and cover letter to each job: Customizing your application materials to highlight relevant experience increases your chances of standing out to employers.</p>
  <ul>
    
    <li>Prepare thoroughly for interviews: Research the company and practice answering common questions to make a strong impression.</li>
   <li> Evaluate job offers carefully: Consider salary, benefits, work-life balance, and whether the role aligns with your long-term goals before accepting an offer.</li>
    <li>Keep learning and growing in your career: Continuously improving your skills ensures you remain competitive and satisfied in your professional life.</li>
    <li>Seek opportunities that align with long-term goals: Focus on roles that not only fulfill immediate needs but also support your future aspirations.</li>
  </ul>
</>
    ),
        
      image: interview,
    },
    2: {
      title: "Master Your Job Interviews",
     
      
    //   comments: "8 Comments",
      content: (
        <>
          <p>
            Job interviews are a critical step in the hiring process, and they can often be the deciding factor in whether or not you land your dream job. 
            To help you excel in your next interview, we’ve compiled expert tips and strategies that will ensure you make a lasting impression.
            Carefully review the job description and identify the key skills and qualifications required for the position. Think about how your experience 
            aligns with these requirements. Be prepared to discuss specific examples from your past work that demonstrate your ability to succeed in the role.
          </p>
          <h3>Practice Common Interview Questions</h3>
         
          <ul>
          <li>Highlight the most important qualifications and responsibilities.</li>
          <li>Prepare examples that showcase your experience and skills relevant to the job.</li>
            <li>"Tell me about yourself."</li>
            <li>"Why do you want to work for our company?"</li>
            <li>"What are your strengths and weaknesses?"</li>
            <li>"Describe a challenging situation you faced at work and how you handled it."</li>
          </ul>
          <h3>Use the STAR Method</h3>
          <ul>
            <li><strong>Situation:</strong> Describe the context within which you performed a task or faced a challenge.</li>
            <li><strong>Task:</strong> Explain the task you were responsible for.</li>
            <li><strong>Action:</strong> Detail the actions you took to address the situation.</li>
            <li><strong>Result:</strong> Share the outcomes of your actions, emphasizing positive results.</li>
          </ul>
          

         
        </>
      ),
      image: interview_pre,
    },
    3: {
      title: "How to Prepare for Interviews Like a Pro",
      
      
    //   comments: "5 Comments",
      content: (
        <>
          <p>
            Job interviews can be nerve-wracking, but with the right preparation, you can boost your confidence and increase your chances 
            of landing your dream job. Here are some essential techniques to help you ace your next interview:
          </p>
          <h3>Know Yourself and Your Target</h3>
          <ul>
            <li><strong>Self-assessment:</strong> Understand your strengths, weaknesses, career goals, and values.</li>
            <li><strong>Research the company:</strong> Learn about the company's mission, values, products, and recent news.</li>
            <li><strong>Analyze the job description:</strong> Identify key skills and responsibilities required for the role.</li>
            <li><strong>Develop your elevator pitch:</strong> A concise summary of your professional experience and career goals.</li>
            <li><strong>Prepare compelling stories:</strong> Use the STAR method (Situation, Task, Action, Result) to structure your answers to behavioral questions.</li>
            <li><strong>Quantify your achievements:</strong> Use numbers and metrics to demonstrate your impact.</li>
            <li><strong>Anticipate common questions:</strong> Prepare thoughtful answers to frequently asked interview questions.</li>
            <li><strong>Mock interviews:</strong> Practice with a friend, family member, or career counselor.</li>
            <li><strong>Body language:</strong> Pay attention to your posture, eye contact, and facial expressions.</li>
           <li><strong>Dress professionally:</strong> Choose attire that aligns with the company culture.</li>
            <li><strong>Prepare your materials:</strong> Bring copies of your resume and portfolio.</li>
            <li><strong>Plan your route:</strong> Arrive early to avoid stress and last-minute rush.</li>
            <li><strong>Send a thank-you note:</strong> Reinforce your interest in the position and express gratitude for the interviewer's time.</li>
            <li><strong>Build relationships:</strong> Connect with the interviewer on LinkedIn or other professional platforms.</li>
          </ul>
          <p>
            Remember, preparation is key to interview success. By following these tips and practicing consistently, you can increase your confidence 
            and make a strong impression on potential employers.
          </p>
        </>
      ),
      image: Job,
    },
  };

  const blog = blogContent[id];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <Container className="blog-section">
      <Row className="mb-4">
        <Col className="text-center">
          <img src={blog.image} alt={blog.title} className="img-fluid blog-image" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-meta">{blog.date} - {blog.comments}</p>
          <div className="blog-content">{blog.content}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
