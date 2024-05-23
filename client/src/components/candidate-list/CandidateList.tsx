import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

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
      <h2>Candidates</h2>
      {candidates.map((candidate) => (
        <Card key={candidate.id} variant="outlined" style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {candidate.firstName} {candidate.lastName}
            </Typography>
            <Typography color="textSecondary">
              Email: {candidate.email}
            </Typography>
            <Typography color="textSecondary">
              Phone: {candidate.phone}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CandidateList;
