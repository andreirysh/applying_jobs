import React, { useState } from 'react';
import { Button, TextField, Typography, Grid } from '@mui/material';

interface PositionFormProps {
    onSubmit: (formData: PositionFormData) => void;
    initialData?: PositionFormData;
}

interface PositionFormData {
    title: string;
    status: string;
}

const PositionForm: React.FC<PositionFormProps> = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState<PositionFormData>(initialData || { title: '', status: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6">Create a New Position</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="title"
                        label="Title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="status"
                        label="Status"
                        value={formData.status}
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

export default PositionForm;
