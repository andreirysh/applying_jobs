import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PositionsModule } from './positions/positions.module';
import { CandidatesModule } from './candidates/candidates.module';
import { ApplicationsModule } from './applications/applications.module';
import { Position } from './entities/position.entity';
import { Candidate } from './entities/candidate.entity';
import { Application } from './entities/application.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'RAzs2525252525',
      database: 'job_app',
      entities: [Position, Candidate, Application],
      synchronize: true,
    }),
    PositionsModule,
    CandidatesModule,
    ApplicationsModule,
  ],
})
export class AppModule {}
