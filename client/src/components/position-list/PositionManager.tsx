import React, { useEffect, useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PositionForm from './PositionForm';
import { fetchPositions } from '../../services/apiService';
import { Position, PositionFormData } from './interfaces';
import { PositionList } from './PositionsList';

export const PositionManager: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [positions, setPositions] = useState<Position[]>([]);

    useEffect(() => {
        fetchPositions()
            .then(data => {
                setPositions(data);
            })
            .catch(error => {
                console.error('Error fetching positions:', error);
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
            setPositions(prevPositions => [...prevPositions, data] as any);
            setOpenDialog(false);
        } catch (error) {
            console.error(error);
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

            const updatedPosition = await response.json();
            setPositions(prevPositions => prevPositions.map(position => {
                if (position.id === positionId) {
                    return updatedPosition;
                }
                return position;
            }) as any);
        } catch (error) {
            console.error(error);
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
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Position Manager</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
                Add Position
            </Button>
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
        </div>
    );
};