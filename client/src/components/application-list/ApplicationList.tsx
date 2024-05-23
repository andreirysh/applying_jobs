import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Application {
    id: number;
    creationDate: string;
    cv: string;
}

interface ApplicationListProps {
    applications: Application[];
}

const ApplicationList: React.FC<ApplicationListProps> = ({ applications }) => {
    return (
        <div>
            <h2>Applications</h2>
            {applications.map((application) => (
                <Card key={application.id} variant="outlined" style={{ marginBottom: '10px' }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Creation Date: {application.creationDate}
                        </Typography>
                        <Typography color="textSecondary">
                            CV: {application.cv}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ApplicationList;
