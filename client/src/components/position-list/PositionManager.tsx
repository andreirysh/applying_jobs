import React, { useEffect, useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PositionForm from './PositionForm';
import PositionList from './PositionsList';
import { addPosition } from '../../store/slices/positionsSlice';
import { useDispatch } from 'react-redux';
import { fetchPositions } from '../../services/apiService';

interface PositionFormData {
    title: string;
    status: string;
}

const PositionManager: React.FC = () => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const [positions, setPositions] = useState([]);

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
            // setPositions((prevPositions) => [...prevPositions, data]);
            dispatch(addPosition(data));
            setOpenDialog(false);
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
            <PositionList positions={positions} />
        </div>
    );
};

export default PositionManager;
