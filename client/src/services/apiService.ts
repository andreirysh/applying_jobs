import { ApplicationFormData } from "../components/application-list/interfaces";
import { Candidate } from "../components/candidate-list/interfaces";
import { CandidateFormData } from "./interfaces";

const API_BASE_URL = 'http://localhost:3000';

export const fetchPositions = async () => {
  const response = await fetch(`${API_BASE_URL}/positions`);
  const data = await response.json();
  return data;
};

export const fetchCandidates = async (): Promise<Candidate[]> => {
  const response = await fetch(`${API_BASE_URL}/candidates`);
  const data = await response.json();
  return data;
};

export const fetchApplications = async () => {
  const response = await fetch(`${API_BASE_URL}/applications`);
  const data = await response.json();
  return data;
};

export const createCandidate = async (candidateData: CandidateFormData): Promise<Candidate> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates`, {
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
    throw new Error('Error creating candidate');
  }
};

export const createApplication = async (formData: ApplicationFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to create application');
    }

    const data = await response.json();
    console.log('Application created successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw new Error('Error creating application');
  }
};

export const updateCandidate = async (id: number, newData: Partial<Candidate>): Promise<Candidate> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Failed to update candidate');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error updating candidate');
  }
};

export const deleteCandidate = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/candidates/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete candidate');
    }

    return true;
  } catch (error) {
    throw new Error('Error deleting candidate');
  }
};
