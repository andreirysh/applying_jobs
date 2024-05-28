import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';
import { CandidateFormProps } from '../interfaces';

export const CandidateForm: React.FC<CandidateFormProps> = ({ formData, setFormData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    return (
        <form>
            <Typography data-testid='candidate-title' variant="h6">Create a New Candidate</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="phone"
                        label="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
            </Grid>
        </form>
    );
};
