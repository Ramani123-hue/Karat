import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookingConfirmationPage = () => {
    const navigate = useNavigate();

    const handleDownload = () => {
        // Simulate a download action
        const element = document.createElement("a");
        const file = new Blob(["Your interview slot has been booked."], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "interview_confirmation.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Your Slot Has Been Booked!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Thank you for booking your interview slot. We look forward to seeing you!
            </Typography>
            <Button variant="contained" onClick={handleDownload} sx={{ marginTop: 2 }}>
                Download Confirmation
            </Button>
            <Button variant="outlined" onClick={() => navigate('/job')} sx={{ marginTop: 2, marginLeft: 2 }}>
                Back to Job Search
            </Button>
        </Box>
    );
};

export default BookingConfirmationPage;