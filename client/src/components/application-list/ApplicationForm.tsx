import React, { useState } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { ApplicationFormData } from './interfaces';

interface ApplicationFormProps {
    onSubmit: (formData: ApplicationFormData) => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ApplicationFormData>({ candidateId: 0, positionId: 0, cv: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            candidateId: Number(formData.candidateId),
            positionId: Number(formData.positionId)
        });
        setFormData({ candidateId: 0, positionId: 0, cv: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6">Create a New Application</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="cv"
                        label="CV"
                        value={formData.cv}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};