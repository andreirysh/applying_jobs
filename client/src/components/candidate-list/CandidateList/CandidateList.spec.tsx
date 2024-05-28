import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CandidateList } from './CandidateList';

describe('CandidateList Component', () => {
  const candidates = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210' }
  ];
  const onEditMock = jest.fn();
  const onDeleteMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders list with correct title and candidates', () => {
    render(<CandidateList candidates={candidates} onEdit={onEditMock} onDelete={onDeleteMock} />);
    expect(screen.getByText('Candidates')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('calls onEdit with correct candidate when Edit button is clicked', () => {
    render(<CandidateList candidates={candidates} onEdit={onEditMock} onDelete={onDeleteMock} />);
    const editButton = screen.getAllByRole('button', { name: 'Edit' });
    fireEvent.click(editButton[0]);
    expect(onEditMock).toHaveBeenCalledWith(candidates[0]);
  });

  it('calls onDelete with correct candidate when Delete button is clicked', () => {
    render(<CandidateList candidates={candidates} onEdit={onEditMock} onDelete={onDeleteMock} />);
    const deleteButton = screen.getAllByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton[0]);
    expect(onDeleteMock).toHaveBeenCalledWith(candidates[0]);
  });
});
