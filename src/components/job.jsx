import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const JobSearchPage = () => {
    const jobs = [
        {
            id: 1,
            job_title: 'Software Engineer',
            employer_name: 'Tech Company',
            job_description: 'Develop and maintain web applications using React and Node.js.',
            job_apply_link: '#',
        },
        {
            id: 2,
            job_title: 'Data Analyst',
            employer_name: 'Data Corp',
            job_description: 'Analyze data and generate reports to support business decisions.',
            job_apply_link: '#',
        },
        {
            id: 3,
            job_title: 'Product manager',
            employer_name: 'Data Corp',
            job_description: 'Analyze data and generate reports to support business decisions.',
            job_apply_link: '#',
        },
        {
            id: 4,
            job_title: 'Data scientist',
            employer_name: 'Data Corp',
            job_description: 'Analyze data and generate reports to support business decisions.',
            job_apply_link: '#',
        },
        {
            id: 5,
            job_title: 'Tester',
            employer_name: 'Data Corp',
            job_description: 'Analyze data and generate reports to support business decisions.',
            job_apply_link: '#',
        },
        {
            id: 6,
            job_title: 'Designer',
            employer_name: 'Data Corp',
            job_description: 'Analyze data and generate reports to support business decisions.',
            job_apply_link: '#',
        },

        // Add more sample jobs as needed
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredJobs = jobs.filter(job =>
        job.job_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.employer_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const JobCard = ({ job }) => {
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {job.job_title}
                    </Typography>
                    <Typography color="text.secondary">
                        {job.employer_name}
                    </Typography>
                    <Typography variant="body2">
                        {job.job_description.substring(0, 100)}...
                    </Typography>
                    <Button size="small" onClick={() => navigate('/det', { state: { job } })}>
                        Apply Now
                    </Button>
                </CardContent>
            </Card>
        );
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Job Search
            </Typography>
            <TextField
                fullWidth
                label="Search for jobs"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained">
                Search
            </Button>

            <Grid container spacing={2} sx={{ marginTop: 3 }}>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <Grid item xs={12} sm={6} md={4} key={job.id}>
                            <JobCard job={job} />
                        </Grid>
                    ))
                ) : (
                    <Typography>No jobs found.</Typography>
                )}
            </Grid>
        </Box>
    );
};

export default JobSearchPage;