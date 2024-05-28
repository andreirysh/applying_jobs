import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApplicationDelete } from './ApplicationDelete';

describe('ApplicationDelete Component', () => {
  const application = { id: 1, candidateId: 1, positionId: 1, cv: 'Test CV' };
  const onDeleteMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title and message', () => {
    render(<ApplicationDelete application={application} onDelete={onDeleteMock} onClose={onCloseMock} />);
    expect(screen.getByText('Delete Application')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete this application?')).toBeInTheDocument();
  });

  it('calls onDelete and onClose when Delete button is clicked', () => {
    render(<ApplicationDelete application={application} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith(1);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<ApplicationDelete application={application} onDelete={onDeleteMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
