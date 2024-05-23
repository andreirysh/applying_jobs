
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import PositionEdit from './PositionEdit';
import { Position, PositionListProps } from './interfaces';
import { PositionDelete } from './PositionDelete';

export const PositionList: React.FC<PositionListProps> = ({ positions, onEdit, onDelete }) => {
    const [editPosition, setEditPosition] = useState<Position | null>(null);
    const [deletePosition, setDeletePosition] = useState<Position | null>(null);

    const handleEdit = (position: Position) => {
        setEditPosition(position);
    };

    const handleDelete = (position: Position) => {
        setDeletePosition(position);
    };

    const handleCloseEdit = () => {
        setEditPosition(null);
    };

    const handleCloseDelete = () => {
        setDeletePosition(null);
    };

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
                                <Button variant="outlined" onClick={() => handleEdit(position)}>
                                    Edit
                                </Button>
                                <Button variant="outlined" onClick={() => handleDelete(position)}>
                                    Delete
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {editPosition && (
                <PositionEdit
                    position={editPosition}
                    onEdit={onEdit}
                    onClose={handleCloseEdit}
                />
            )}
            {deletePosition && (
                <PositionDelete
                    position={deletePosition}
                    onDelete={onDelete}
                    onClose={handleCloseDelete}
                />
            )}
        </div>
    );
};