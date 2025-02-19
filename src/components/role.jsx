import React from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
    const navigate = useNavigate();

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #141e30, #243b55)',
                color: 'white',
                textAlign: 'center',
                padding: 2,
            }}
        >
            
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ mb: 2, backgroundColor: '#243b55' }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                Continue as Job Seeker
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 10}}>
                                As a Job Seeker, you can explore various job opportunities, apply for positions, and take the next step in your career.
                            </Typography>
                            <Button 
                                variant="contained" 
                                onClick={() => navigate('/sign')}
                                sx={{ 
                                    width: '50%', 
                                    padding: '12px 0', // Adjust padding for height
                                    fontSize: '16px', // Adjust font size
                                    borderRadius: '8px' // Optional: Adjust border radius for a rounded look
                                }}
                            >
                                Next
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ mb: 2, backgroundColor: '#243b55' }}>
                        <CardContent>
                            <Typography variant="h4" sx={{ mb: 2 }}>
                                 Hirer
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 10}}>
                                As a Hirer, you can post job openings, review applications, and find the right talent for your organization.
                            </Typography>
                            <Button 
                                variant="contained" 
                                onClick={() => navigate('/signup')} // Change this to the hirer sign-in page if you have one
                                sx={{ 
                                    width: '50%', 
                                    padding: '12px 0', // Adjust padding for height
                                    fontSize: '16px', // Adjust font size
                                    borderRadius: '8px' // Optional: Adjust border radius for a rounded look
                                }}
                            >
                                Next
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RoleSelectionPage;