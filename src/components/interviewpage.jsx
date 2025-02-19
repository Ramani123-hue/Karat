import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InterviewBookingPage = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the booking logic here (e.g., send data to an API or save it in state)
        console.log('Interview booked:', { date, time, venue });
        // Navigate to the confirmation page
        navigate('/con'); // Change this to the desired route after booking
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Book Interview Slot
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    label="Time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    fullWidth
                    label="Venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" type="submit">
                    Book Slot
                </Button>
            </form>
        </Box>
    );
};

export default InterviewBookingPage;