import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PositionEdit from './PositionEdit';

describe('PositionEdit Component', () => {
  const position = { id: 1, title: 'Software Engineer', status: 'Open' };
  const onEditMock = jest.fn();
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders dialog with correct title', () => {
    render(<PositionEdit position={position} onEdit={onEditMock} onClose={onCloseMock} />);
    expect(screen.getByText('Edit Position')).toBeInTheDocument();
  });

  it('calls onClose when Cancel button is clicked', () => {
    render(<PositionEdit position={position} onEdit={onEditMock} onClose={onCloseMock} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
