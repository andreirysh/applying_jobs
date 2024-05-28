import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApplicationList } from './ApplicationList';

describe('ApplicationList Component', () => {
  const applications = [
    { id: 1, candidateId: 1, positionId: 1, cv: 'Test CV' },
    { id: 2, candidateId: 2, positionId: 2, cv: 'Test CV2' }
  ];
  const onEditMock = jest.fn();
  const onDeleteMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders list with correct title and applications', () => {
    render(<ApplicationList applications={applications} onEdit={onEditMock} onDelete={onDeleteMock} />);
  });

  it('calls onEdit with correct application when Edit button is clicked', () => {
    render(<ApplicationList applications={applications} onEdit={onEditMock} onDelete={onDeleteMock} />);
    const editButton = screen.getAllByRole('button', { name: 'Edit' });
    fireEvent.click(editButton[0]);
    expect(onEditMock).toHaveBeenCalledWith(applications[0]);
  });

  it('calls onDelete with correct application when Delete button is clicked', () => {
    render(<ApplicationList applications={applications} onEdit={onEditMock} onDelete={onDeleteMock} />);
    const deleteButton = screen.getAllByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton[0]);
    expect(onDeleteMock).toHaveBeenCalledWith(applications[0]);
  });
});
