import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { ApplicationListProps } from './interfaces';

export const ApplicationList: React.FC<ApplicationListProps> = ({ applications, onEdit, onDelete }) => {
    return (
        <div className='list-wrapper'>
            <Typography variant="h5">Applications</Typography>
            <Grid container spacing={2}>
                {applications.map((application) => (
                    <Grid item xs={12} sm={6} md={4} key={application.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Application ID: {application.id}
                                </Typography>
                                <Typography color="textSecondary">CV: {application.cv}</Typography>
                                <Grid container spacing={1} style={{ marginTop: '1rem' }}>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => onEdit(application)}
                                        >
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => onDelete(application)}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};