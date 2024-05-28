import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { CandidateDeleteProps } from '../interfaces';

export const CandidateDelete: React.FC<CandidateDeleteProps> = ({ candidate, onDelete, onClose }) => {
    const handleDelete = () => {
        onDelete(candidate.id);
        onClose();
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogTitle>Delete Candidate</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    Are you sure you want to delete the candidate "{candidate.firstName} {candidate.lastName}"?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button onClick={handleDelete} color="secondary">Delete</Button>
            </DialogActions>
        </Dialog>
    );
};