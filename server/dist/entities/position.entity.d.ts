import { Application } from './application.entity';
export declare class Position {
    id: number;
    title: string;
    creationDate: Date;
    status: string;
    applications: Application[];
}
