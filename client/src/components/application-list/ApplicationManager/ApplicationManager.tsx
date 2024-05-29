import React, { useState, useEffect } from 'react';
import { Application, ApplicationFormData } from '../interfaces';
import { Typography, Snackbar, Alert } from '@mui/material';
import { ApplicationDelete } from '../ApplicationDelete/ApplicationDelete';
import { createApplication, deleteApplication, fetchApplications, updateApplication } from '../../../services/apiService';
import { ApplicationForm } from '../ApplicationForm/ApplicationForm';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { ApplicationEdit } from '../ApplicationEdit/ApplicationEdit';
import { ApiError } from '../../candidate-list/interfaces';


export const ApplicationManager: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [editApplication, setEditApplication] = useState<Application | null>(null);
    const [deleteApplicationData, setDeleteApplicationData] = useState<Application | null>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        fetchApplications()
            .then((data: Application[]) => {
                setApplications(data);
            })
            .catch((error: unknown) => {
                if (isApiError(error)) {
                    showError('Error: ' + (error.response?.data?.message || error.message));
                } else {
                    showError('Error: ' + String(error));
                }
            });
    }, []);

    const handleFormSubmit = async (formData: ApplicationFormData) => {
        try {
            const newApplication: Application = await createApplication(formData);
            setApplications(prevApplications => [...prevApplications, newApplication]);
        } catch (error: unknown) {
            if (isApiError(error)) {
                showError('Error: ' + (error.response?.data?.message || error.message));
            } else {
                showError('Error: ' + String(error));
            }
        }
    };

    const handleEditApplication = async (id: number, newData: Omit<Application, "id">) => {
        try {
            const updatedApplication: Application = await updateApplication(id, newData);
            setApplications(prevApplications =>
                prevApplications.map(application => {
                    if (application.id === id) {
                        return updatedApplication;
                    }
                    return application;
                })
            );
        } catch (error: unknown) {
            if (isApiError(error)) {
                showError('Error: ' + (error.response?.data?.message || error.message));
            } else {
                showError('Error: ' + String(error));
            }
        }
    };

    const handleDeleteApplication = async (id: number) => {
        try {
            await deleteApplication(id);
            setApplications(prevApplications => prevApplications.filter(application => application.id !== id));
        } catch (error: unknown) {
            if (isApiError(error)) {
                showError('Error ' + (error.response?.data?.message || error.message));
            } else {
                showError('Error ' + String(error));
            }
        }
    };

    const handleCloseEdit = () => {
        setEditApplication(null);
    };

    const handleCloseDelete = () => {
        setDeleteApplicationData(null);
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
        <div>
            <div className='manager-header'>
                <Typography variant='h4'>Applications</Typography>
                <ApplicationForm onSubmit={handleFormSubmit} />
            </div>
            <ApplicationList
                applications={applications}
                onEdit={setEditApplication}
                onDelete={setDeleteApplicationData}
            />
            {editApplication && (
                <ApplicationEdit
                    application={editApplication}
                    onEdit={handleEditApplication}
                    onClose={handleCloseEdit}
                />
            )}
            {deleteApplicationData && (
                <ApplicationDelete
                    application={deleteApplicationData}
                    onDelete={handleDeleteApplication}
                    onClose={handleCloseDelete}
                />
            )}
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