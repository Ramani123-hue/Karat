import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
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
            <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                Welcome to Karat
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
                Your journey to success starts here. Join us to explore amazing opportunities!
            </Typography>
            <Button 
                variant="contained" 
                onClick={() => navigate('/role')}
                sx={{ padding: '10px 20px' }}
            >
                Get Started
            </Button>
        </Box>
    );
};

export default WelcomePage;