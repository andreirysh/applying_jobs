import { Application } from './application.entity';
export declare class Candidate {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    applications: Application[];
}
