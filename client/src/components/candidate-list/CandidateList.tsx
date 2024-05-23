import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

interface CandidateListProps {
    candidates: Candidate[];
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates }) => {
    return (
        <div>
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
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CandidateList;
