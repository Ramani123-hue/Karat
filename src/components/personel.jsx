import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PersonalDetailsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        college: '',
        workExperience: '',
        resume: null,
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data Submitted:', formData);
        
        // Navigate to the job page after form submission
        navigate('/job'); // Navigate to the job page
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #f3f3f3, #e0e0e0)',
        }}>
            <Paper sx={{ padding: 4, textAlign: 'center', maxWidth: 600, width: '100%' }}>
                <Typography variant="h4" sx={{ mb: 3, color: '#333', fontWeight: 'bold' }}>
                    Personal Details Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    {Object.entries({
                        name: 'Name',
                        address: 'Address',
                        phone: 'Phone Number',
                        email: 'Email',
                        college: 'College Details',
                        workExperience: 'Work Experience',
                    }).map(([key, label]) => (
                        <TextField
                            key={key}
                            fullWidth
                            name={key}
                            label={label}
                            variant="outlined"
                            value={formData[key]}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                    ))}
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        style={{ marginBottom: '16px', width: '100%' }}
                    />
                    <Button 
                        fullWidth 
                        variant="contained" 
                        type="submit"
                        disabled={!formData.name || !formData.email || !formData.phone}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default PersonalDetailsForm;