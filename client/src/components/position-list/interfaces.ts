import { ApplicationFormData } from "../application-list/interfaces";

export interface PositionFormData {
    title: string;
    status: string;
};

export interface Position {
    id: number;
    title: string;
    status: string;
}

export interface PositionListProps {
    positions: Position[];
    onEdit: (id: number, newData: PositionFormData) => void;
    onDelete: (id: number) => void;
}

export interface PositionFormProps {
    onSubmit: (formData: PositionFormData) => void;
    initialData?: PositionFormData;
}

export interface PositionDeleteProps {
    position: Position;
    onDelete: (id: number) => void;
    onClose: () => void;
}

export interface PositionEditProps {
    position: Position;
    onEdit: (id: number, newData: PositionFormData) => void;
    onClose: () => void;
}

export interface ApplicationFormProps {
    onSubmit: (formData: ApplicationFormData) => void;
}
