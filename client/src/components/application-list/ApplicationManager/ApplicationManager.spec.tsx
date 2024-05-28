import { render } from '@testing-library/react';
import { ApplicationManager } from './ApplicationManager';

describe('ApplicationManager Component', () => {
  it('renders header and form for creating a new application', () => {
    render(<ApplicationManager />);
  });
});