import { Position } from './position.entity';
import { Candidate } from './candidate.entity';
export declare class Application {
    id: number;
    creationDate: Date;
    position: Position;
    candidate: Candidate;
    cv: string;
}
