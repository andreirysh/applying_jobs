import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Position } from './position.entity';
import { Candidate } from './candidate.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @ManyToOne(() => Position, (position) => position.applications)
  position: Position;

  @ManyToOne(() => Candidate, (candidate) => candidate.applications)
  candidate: Candidate;

  @Column('text')
  cv: string;
}
