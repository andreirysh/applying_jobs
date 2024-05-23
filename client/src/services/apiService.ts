const API_BASE_URL = 'http://localhost:3000';

export const fetchPositions = async () => {
  const response = await fetch(`${API_BASE_URL}/positions`);
  const data = await response.json();
  return data;
};

export const fetchCandidates = async () => {
  const response = await fetch(`${API_BASE_URL}/candidates`);
  const data = await response.json();
  return data;
};

export const fetchApplications = async () => {
  const response = await fetch(`${API_BASE_URL}/applications`);
  const data = await response.json();
  return data;
};
