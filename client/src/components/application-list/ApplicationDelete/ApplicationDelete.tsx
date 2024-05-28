import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { ApplicationDeleteProps } from '../interfaces';

export const ApplicationDelete: React.FC<ApplicationDeleteProps> = ({ application, onDelete, onClose }) => {
    const handleDelete = () => {
        onDelete(application.id);
        onClose();
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Delete Application</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Are you sure you want to delete this application?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button onClick={handleDelete} color="secondary">Delete</Button>
            </DialogActions>
        </Dialog>
    );
};
