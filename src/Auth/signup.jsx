import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { toast } from 'react-toastify';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSignup = () => {
        // Simulate a successful signup
        toast.success('Account created successfully!');
        navigate('/per');
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #141e30, #243b55)',
        }}>
            <Paper sx={{ padding: 4, textAlign: 'center', maxWidth: 400, width: '100%' }}>
                <Typography variant="h4" sx={{ mb: 3, color: '#243b55', fontWeight: 'bold' }}>
                    Sign In
                </Typography>
                {Object.entries({
                    name: 'Name',
                    email: 'Email',
                    password: 'Password'
                }).map(([key, label]) => (
                    <TextField
                        key={key}
                        fullWidth
                        name={key}
                        label={label}
                        type={key === 'password' ? 'password' : 'text'}
                        variant="outlined"
                        value={formData[key]}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                ))}
                <Button 
                    fullWidth 
                    variant="contained" 
                    onClick={handleSignup}
                    disabled={!formData.email || !formData.password || !formData.name}
                >
                    Sign in
                </Button>
            </Paper>
        </Box>
    );
};

export default Signup;