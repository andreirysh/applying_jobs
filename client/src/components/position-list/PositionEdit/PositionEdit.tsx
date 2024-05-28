import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { PositionEditProps, PositionFormData } from '../interfaces';

const PositionEdit: React.FC<PositionEditProps> = ({ position, onEdit, onClose }) => {
    const [formData, setFormData] = useState<PositionFormData>({
        title: position.title,
        status: position.status,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onEdit(position.id, formData);
        onClose();
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Edit Position</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="title"
                        label="Title"
                        data-testid='title'
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        name="status"
                        label="Status"
                        data-testid='status'
                        value={formData.status}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <DialogActions>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                        <Button onClick={onClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default PositionEdit;
