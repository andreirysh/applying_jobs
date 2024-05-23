import React, { useEffect, useState } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { createCandidate, fetchCandidates, updateCandidate, deleteCandidate } from '../../services/apiService';
import { Candidate } from './interfaces';
import { CandidateList } from './CandidateList';
import { CandidateForm } from './CandidateForm';
import { CandidateEdit } from './CandidateEdit';
import { CandidateDelete } from './CandidateDelete';

export const CandidateManager: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [editCandidate, setEditCandidate] = useState(null);
    const [deleteCandidateData, setDeleteCandidateData] = useState(null);

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

    const handleEditCandidate = async (id: any, newData: any) => {
        try {
            const updatedCandidate = await updateCandidate(id, newData);
            setCandidates(prevCandidates => prevCandidates.map(candidate => {
                if (candidate.id === id) {
                    return updatedCandidate;
                }
                return candidate;
            }) as any);
        } catch (error) {
            console.error('Error updating candidate:', error);
        }
    };

    const handleDeleteCandidate = async (id: any) => {
        try {
            await deleteCandidate(id);
            setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate.id !== id));
        } catch (error) {
            console.error('Error deleting candidate:', error);
        }
    };

    const handleOpenEdit = (candidate: any) => {
        setEditCandidate(candidate);
    };

    const handleCloseEdit = () => {
        setEditCandidate(null);
    };

    const handleOpenDelete = (candidate: any) => {
        setDeleteCandidateData(candidate);
    };

    const handleCloseDelete = () => {
        setDeleteCandidateData(null);
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
            <CandidateList candidates={candidates} onEdit={handleOpenEdit} onDelete={handleOpenDelete} />
            {editCandidate && (
                <CandidateEdit candidate={editCandidate} onEdit={handleEditCandidate} onClose={handleCloseEdit} />
            )}
            {deleteCandidateData && (
                <CandidateDelete candidate={deleteCandidateData} onDelete={handleDeleteCandidate} onClose={handleCloseDelete} />
            )}
        </div>
    );
};
