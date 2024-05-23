import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface Application {
    id: number;
    candidateId: number;
    positionId: number;
    cv: string;
}

interface ApplicationListProps {
    applications: Application[];
}

const ApplicationList: React.FC<ApplicationListProps> = ({ applications }) => {
    return (
        <div>
            <Typography variant="h5">Applications</Typography>
            <Grid container spacing={2}>
                {applications.map((application) => (
                    <Grid item xs={12} sm={6} md={4} key={application.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Application ID: {application.id}
                                </Typography>
                                <Typography color="textSecondary">Candidate ID: {application.candidateId}</Typography>
                                <Typography color="textSecondary">Position ID: {application.positionId}</Typography>
                                <Typography color="textSecondary">CV: {application.cv}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ApplicationList;
