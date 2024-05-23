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

interface CandidateFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function createCandidate(candidateData: CandidateFormData) {
  try {
    const response = await fetch('http://localhost:3000/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidateData),
    });

    if (!response.ok) {
      throw new Error('Failed to create candidate');
    }

    return await response.json();
  } catch (error) {
    throw new Error();
  }
}
