
export interface Application {
    id: number;
    candidateId: number;
    positionId: number;
    cv: string;
}

export interface ApplicationFormData {
    candidateId: number;
    positionId: number;
    cv: string;
}


export interface ApplicationListProps {
    applications: Application[];
}