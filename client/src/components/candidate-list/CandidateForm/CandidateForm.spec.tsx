import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CandidateForm } from './CandidateForm';

describe('CandidateForm Component', () => {
  const setFormDataMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form with correct title', () => {
    render(<CandidateForm formData={{ firstName: '', lastName: '', email: '', phone: '' }} setFormData={setFormDataMock} />);
    expect(screen.getByTestId('candidate-title')).toBeInTheDocument();
  });

});
