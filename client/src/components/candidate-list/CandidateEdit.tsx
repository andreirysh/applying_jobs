import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Candidate, CandidateEditProps } from './interfaces';

export const CandidateEdit: React.FC<CandidateEditProps> = ({ candidate, onEdit, onClose }) => {
    const [formData, setFormData] = useState<Omit<Candidate, 'id'>>({
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        email: candidate.email,
        phone: candidate.phone,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onEdit(candidate.id, formData);
        onClose();
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Edit Candidate</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="firstName"
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        name="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        name="phone"
                        label="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">Save</Button>
                        <Button onClick={onClose} color="secondary">Cancel</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};
