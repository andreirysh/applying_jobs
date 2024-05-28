import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PositionDelete } from './PositionDelete';

describe('PositionDelete Component', () => {
  const position = { id: 1, title: 'Software Engineer', status: 'Open' };
  const onDeleteMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title and message', () => {
    render(<PositionDelete position={position} onDelete={onDeleteMock} onClose={onCloseMock} />);
    expect(screen.getByText('Delete Position')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete the position "Software Engineer"?')).toBeInTheDocument();
  });

  it('calls onDelete and onClose when Delete button is clicked', () => {
    render(<PositionDelete position={position} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith(1);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<PositionDelete position={position} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
