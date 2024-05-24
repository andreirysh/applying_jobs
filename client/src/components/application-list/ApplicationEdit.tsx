import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { ApplicationEditProps } from './interfaces';

export const ApplicationEdit: React.FC<ApplicationEditProps> = ({ application, onEdit, onClose }) => {
    const [cv, setCv] = React.useState(application.cv);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onEdit(application.id, { ...application, cv: cv });
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCv(e.target.value);
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Edit Application</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="CV"
                        value={cv}
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
