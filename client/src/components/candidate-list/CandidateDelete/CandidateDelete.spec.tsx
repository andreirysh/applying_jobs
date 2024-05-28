import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CandidateDelete } from './CandidateDelete';

describe('CandidateDelete Component', () => {
  const candidate = { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890' };
  const onDeleteMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title and message', () => {
    render(<CandidateDelete candidate={candidate} onDelete={onDeleteMock} onClose={onCloseMock} />);
    expect(screen.getByText('Delete Candidate')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete the candidate "John Doe"?')).toBeInTheDocument();
  });

  it('calls onDelete and onClose when Delete button is clicked', () => {
    render(<CandidateDelete candidate={candidate} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith(1);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<CandidateDelete candidate={candidate} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
