import React, { useState, useEffect } from 'react';
import { Application, ApplicationFormData } from '../interfaces';
import { Typography } from '@mui/material';
import { ApplicationDelete } from '../ApplicationDelete/ApplicationDelete';
import { createApplication, deleteApplication, fetchApplications, updateApplication } from '../../../services/apiService';
import { ApplicationForm } from '../ApplicationForm/ApplicationForm';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { ApplicationEdit } from '../ApplicationEdit/ApplicationEdit';

export const ApplicationManager: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [editApplication, setEditApplication] = useState<Application | null>(null);
    const [deleteApplicationData, setDeleteApplicationData] = useState<Application | null>(null);

    useEffect(() => {
        fetchApplications()
            .then((data: Application[]) => {
                setApplications(data);
            })
            .catch((error: Error) => {
                console.error('Error fetching applications:', error);
            });
    }, []);

    const handleFormSubmit = async (formData: ApplicationFormData) => {
        try {
            const newApplication: Application = await createApplication(formData);
            setApplications(prevApplications => [...prevApplications, newApplication]);
        } catch (error) {
            console.error('Error creating application:', error);
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
        } catch (error) {
            console.error('Error updating application:', error);
        }
    };

    const handleDeleteApplication = async (id: number) => {
        try {
            await deleteApplication(id);
            setApplications(prevApplications => prevApplications.filter(application => application.id !== id));
        } catch (error) {
            console.error('Error deleting application:', error);
        }
    };

    const handleCloseEdit = () => {
        setEditApplication(null);
    };

    const handleCloseDelete = () => {
        setDeleteApplicationData(null);
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
        </div>
    );
};