import React, { useState, useEffect } from 'react';
import ApplicationList from './ApplicationList';
import ApplicationForm from './ApplicationForm';
import { fetchApplications, createApplication } from '../../services/apiService';

interface Application {
    id: number;
    candidateId: number;
    positionId: number;
    cv: string;
}

interface ApplicationFormData {
    candidateId: number;
    positionId: number;
    cv: string;
}

const ApplicationManager: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        fetchApplications()
            .then(data => {
                setApplications(data);
            })
            .catch(error => {
                console.error('Error fetching applications:', error);
            });
    }, []);

    const handleFormSubmit = async (formData: ApplicationFormData) => {
        try {
            const newApplication = await createApplication(formData);
            setApplications(prevApplications => [...prevApplications, newApplication] as any);
        } catch (error) {
            console.error('Error creating application:', error);
        }
    };

    return (
        <div>
            <h2>Applications</h2>
            <ApplicationList applications={applications} />
            <ApplicationForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default ApplicationManager;
