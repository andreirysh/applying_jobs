import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { PositionDeleteProps } from './interfaces';

export const PositionDelete: React.FC<PositionDeleteProps> = ({ position, onDelete, onClose }) => {
    const handleDelete = () => {
        onDelete(position.id);
        onClose();
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Delete Position</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Are you sure you want to delete the position "{position.title}"?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="secondary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};