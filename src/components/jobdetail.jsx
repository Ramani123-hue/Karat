import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const job = location.state?.job; // Get the job data passed from the JobSearchPage

    if (!job) {
        return <Typography>No job details available.</Typography>;
    }

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {job.job_title}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                {job.employer_name}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                <strong>Job Description:We are looking for a detail-oriented and analytical Software Tester to join our team. As a Tester, you will be responsible for evaluating software applications to ensure they meet quality standards and function as expected. You will work closely with developers, product managers, and other stakeholders to identify bugs, report issues, and ensure a smooth user experience.

Key Responsibilities:
Develop and execute test plans, test cases, and test scripts.
Identify, document, and track software defects and inconsistencies.
Conduct functional, regression, integration, and performance testing.
Collaborate with developers to troubleshoot and resolve issues.
Ensure that applications meet business requirements and usability standards.
Provide feedback and suggestions for product improvements.
Work with automation tools to enhance the testing process (if applicable).
Stay updated on the latest testing methodologies and tools.
Required Skills & Qualifications:
Bachelor’s degree in Computer Science, IT, or a related field (or equivalent experience).
Experience with manual and automated testing tools.
Strong analytical and problem-solving skills.
Familiarity with Agile and Scrum methodologies.
Excellent communication and documentation skills.
Experience with bug tracking tools like Jira, TestRail, or similar.
Knowledge of programming languages (optional but beneficial).
Preferred Qualifications:
ISTQB or other testing certifications.
Experience in API testing and automation frameworks.
Knowledge of CI/CD pipelines.
                </strong>
                <br />
                {job.job_description}
            </Typography>
            <Button variant="contained" onClick={() => navigate('/book', { state: { job } })}>
                Next
            </Button>
        </Box>
    );
};

export default JobDetailPage;