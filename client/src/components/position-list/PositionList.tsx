import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Position {
  id: number;
  title: string;
  status: string;
}

interface PositionListProps {
  positions: Position[];
}

const PositionList: React.FC<PositionListProps> = ({ positions }) => {
  return (
    <div>
      <h2>Positions</h2>
      {positions.map((position) => (
        <Card key={position.id} variant="outlined" style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {position.title}
            </Typography>
            <Typography color="textSecondary">
              Status: {position.status}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PositionList;