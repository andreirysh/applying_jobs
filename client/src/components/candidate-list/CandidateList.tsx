import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { CandidateListProps } from './interfaces';

export const CandidateList: React.FC<CandidateListProps> = ({ candidates, onEdit, onDelete }) => {
    return (
        <div className='list-wrapper'>
            <Typography variant="h5">Candidates</Typography>
            <Grid container spacing={2}>
                {candidates.map((candidate) => (
                    <Grid item xs={12} sm={6} md={4} key={candidate.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {candidate.firstName} {candidate.lastName}
                                </Typography>
                                <Typography color="textSecondary">Email: {candidate.email}</Typography>
                                <Typography color="textSecondary">Phone: {candidate.phone}</Typography>
                                <Grid container spacing={1} style={{ marginTop: '1rem' }}>
                                    {onEdit && (
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => onEdit(candidate)}
                                            >
                                                Edit
                                            </Button>
                                        </Grid>
                                    )}
                                    {onDelete && (
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => onDelete(candidate)}
                                            >
                                                Delete
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
