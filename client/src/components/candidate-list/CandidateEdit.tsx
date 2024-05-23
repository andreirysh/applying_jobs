import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

interface CandidateEditProps {
    candidate: Candidate;
    onEdit: (id: number, newData: CandidateFormData) => void;
    onClose: () => void;
}

interface CandidateFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

interface Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

const CandidateEdit: React.FC<CandidateEditProps> = ({ candidate, onEdit, onClose }) => {
    const [formData, setFormData] = useState<CandidateFormData>({
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

export default CandidateEdit;
