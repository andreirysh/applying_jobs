import React, { useEffect, useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert } from '@mui/material';
import { fetchPositions } from '../../../services/apiService';
import { Position, PositionFormData } from '../interfaces';
import { PositionList } from '../PositionLists/PositionsList';
import PositionForm from '../PositionForm/PositionForm';
import '../../../styles/styles.css';
import { ApiError } from '../../candidate-list/interfaces';

export const PositionManager: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [positions, setPositions] = useState<Position[]>([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        fetchPositions()
            .then(data => {
                setPositions(data);
            })
            .catch((error: unknown) => {
                if (isApiError(error)) {
                    showError('Error fetching positions: ' + (error.response?.data?.message || error.message));
                } else {
                    showError('Error fetching positions: ' + String(error));
                }
            });
    }, []);

    const handleFormSubmit = async (formData: PositionFormData) => {
        try {
            const response = await fetch('http://localhost:3000/positions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create position');
            }

            const data = await response.json();
            setPositions(prevPositions => [...prevPositions, data]);
            setOpenDialog(false);
        } catch (error: unknown) {
            showError('Error: ' + (error instanceof Error ? error.message : String(error)));
        }
    };

    const handleEdit = async (positionId: number, formData: PositionFormData) => {
        try {
            const response = await fetch(`http://localhost:3000/positions/${positionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update position');
            }
    
            setPositions(prevPositions => prevPositions.map(position => {
                if (position.id === positionId) {
                    return {...position, ...formData};
                }
                return position;
            }));
        } catch (error: unknown) {
            showError('Error: ' + (error instanceof Error ? error.message : String(error)));
        }
    };


    const handleDelete = async (positionId: number) => {
        try {
            const response = await fetch(`http://localhost:3000/positions/${positionId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete position');
            }

            setPositions(prevPositions => prevPositions.filter(position => position.id !== positionId));
        } catch (error: unknown) {
            showError('Error: ' + (error instanceof Error ? error.message : String(error)));
        }
    };

    const showError = (message: string) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setSnackbarMessage('');
    };

    const isApiError = (error: unknown): error is ApiError => {
        return (error as ApiError).message !== undefined;
    };

    return (
        <div >
            <div className='manager-header'>
                <Typography variant="h4">Position Manager</Typography>
                <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
                    Add Position
                </Button>
            </div>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Create a New Position</DialogTitle>
                <DialogContent>
                    <PositionForm onSubmit={handleFormSubmit} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <PositionList positions={positions} onEdit={handleEdit} onDelete={handleDelete} />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};
