import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PositionForm from './PositionForm';

describe('PositionForm Component', () => {
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with correct title', () => {
    render(<PositionForm onSubmit={onSubmitMock} initialData={{ title: '', status: '' }} />);
    expect(screen.getByText('Create a New Position')).toBeInTheDocument();
  });
});
