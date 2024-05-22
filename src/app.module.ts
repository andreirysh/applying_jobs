import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PositionsModule } from './positions/positions.module';
import { CandidatesModule } from './candidates/candidates.module';
import { ApplicationsModule } from './applications/applications.module';

@Module({
  imports: [PositionsModule, CandidatesModule, ApplicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}