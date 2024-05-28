import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CandidateEdit } from './CandidateEdit';

describe('CandidateEdit Component', () => {
  const candidate = { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890' };
  const onEditMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title', () => {
    render(<CandidateEdit candidate={candidate} onEdit={onEditMock} onClose={onCloseMock} />);
    expect(screen.getByText('Edit Candidate')).toBeInTheDocument();
  });

  it('calls onEdit and onClose when form is submitted', () => {
    render(<CandidateEdit candidate={candidate} onEdit={onEditMock} onClose={onCloseMock} />);
    const saveButton = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(saveButton);
    expect(onEditMock).toHaveBeenCalledWith(1, {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890'
    });
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<CandidateEdit candidate={candidate} onEdit={onEditMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
