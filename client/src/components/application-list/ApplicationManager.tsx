import React, { useState, useEffect } from 'react';
import { fetchApplications, createApplication } from '../../services/apiService';
import { Application, ApplicationFormData } from './interfaces';
import { ApplicationList } from './ApplicationList';
import { ApplicationForm } from './ApplicationForm';
import { Typography } from '@mui/material';

export const ApplicationManager: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);

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
        } catch {
            console.error('Error creating application:');
        }
    };

    return (
        <div>
            <Typography variant='h2'>Applications</Typography>
            <ApplicationList applications={applications} />
            <ApplicationForm onSubmit={handleFormSubmit} />
        </div>
    );
};
