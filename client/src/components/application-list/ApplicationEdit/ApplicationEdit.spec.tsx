import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ApplicationEdit } from './ApplicationEdit';

describe('ApplicationEdit Component', () => {
  const application = { id: 1, candidateId: 1, positionId: 1, cv: 'Test CV' };
  const onEditMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title', () => {
    render(<ApplicationEdit application={application} onEdit={onEditMock} onClose={onCloseMock} />);
    expect(screen.getByText('Edit Application')).toBeInTheDocument();
  });

  it('calls onEdit and onClose when form is submitted', () => {
    render(<ApplicationEdit application={application} onEdit={onEditMock} onClose={onCloseMock} />);
    const saveButton = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(saveButton);
    expect(onEditMock).toHaveBeenCalledWith(1, { id: 1, candidateId: 1, positionId: 1, cv: 'Test CV' });
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<ApplicationEdit application={application} onEdit={onEditMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
