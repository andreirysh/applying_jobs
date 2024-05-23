export interface Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface CandidateDeleteProps {
    candidate: Candidate;
    onDelete: (id: number) => void;
    onClose: () => void;
}

export interface CandidateListProps {
    candidates: Candidate[];
    onEdit?: (candidate: Candidate) => void;
    onDelete?: (candidate: Candidate) => void;
}

export interface CandidateFormProps {
    formData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    }>>;
}

export interface CandidateEditProps {
    candidate: Candidate;
    onEdit: (id: number, newData: Omit<Candidate, 'id'>) => void;
    onClose: () => void;
}