
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
    onEdit: (application: Application) => void;
    onDelete: (application: Application) => void;
}

export interface ApplicationEditProps {
    application: Application;
    onEdit: (id: number, newData: Omit<Application, "id">) => void;
    onClose: () => void;
};

export interface ApplicationDeleteProps {
    application: Application;
    onDelete: (id: number) => void;
    onClose: () => void;
}