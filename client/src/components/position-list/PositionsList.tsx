import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

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
            <Typography variant="h5">Positions</Typography>
            <Grid container spacing={2}>
                {positions.map((position) => (
                    <Grid item xs={12} sm={6} md={4} key={position.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {position.title}
                                </Typography>
                                <Typography color="textSecondary">Status: {position.status}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PositionList;
