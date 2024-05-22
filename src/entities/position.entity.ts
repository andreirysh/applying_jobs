import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Application } from './application.entity';

@Entity()
export class Position {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  status: string;

  @OneToMany(() => Application, (application) => application.position)
  applications: Application[];
}
