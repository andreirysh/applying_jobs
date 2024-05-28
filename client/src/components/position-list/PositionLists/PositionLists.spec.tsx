import { render, screen, fireEvent } from '@testing-library/react';
import { PositionList } from './PositionsList';

describe('PositionList Component', () => {
    const positions = [
        { id: 1, title: 'Software Engineer', status: 'Open' },
        { id: 2, title: 'Data Scientist', status: 'Closed' }
    ];
    const onEditMock = jest.fn();
    const onDeleteMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders list with correct title and positions', () => {
        render(<PositionList positions={positions} onEdit={onEditMock} onDelete={onDeleteMock} />);
    });

    it('calls onEdit with correct position when Edit button is clicked', () => {
        render(<PositionList positions={positions} onEdit={onEditMock} onDelete={onDeleteMock} />);
        const editButtons = screen.getAllByRole('button', { name: 'Edit' });
        fireEvent.click(editButtons[0]);
    });

    it('calls onDelete with correct position when Delete button is clicked', () => {
        render(<PositionList positions={positions} onEdit={onEditMock} onDelete={onDeleteMock} />);
        const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
        fireEvent.click(deleteButtons[1]);
    });
});
