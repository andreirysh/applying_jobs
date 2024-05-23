import React, { useEffect, useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CandidateForm from './CandidateForm';
import CandidateList from './CandidateList';
import { createCandidate, fetchCandidates } from '../../services/apiService';

const CandidateManager: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        fetchCandidates()
            .then(data => {
                setCandidates(data);
            })
            .catch(error => {
                console.error('Error fetching candidates:', error);
            });
    }, []);

    const handleFormSubmit = async () => {
        try {
            const newCandidate = await createCandidate(formData);
            setCandidates(prevCandidates => [...prevCandidates, newCandidate] as any);
            setOpenDialog(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error creating candidate:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Candidate Manager</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
                Add Candidate
            </Button>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Create a New Candidate</DialogTitle>
                <DialogContent>
                    <CandidateForm formData={formData} setFormData={setFormData} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleFormSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <CandidateList candidates={candidates} />
        </div>
    );
};

export default CandidateManager;