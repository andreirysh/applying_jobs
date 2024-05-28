import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApplicationForm } from './ApplicationForm';

describe('ApplicationForm Component', () => {
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with correct title', () => {
    render(<ApplicationForm onSubmit={onSubmitMock} />);
    expect(screen.getByText('Create a New Application')).toBeInTheDocument();
  });
});
