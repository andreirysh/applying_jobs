import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { PositionStatus } from './enums/create-positions-enum';

export class CreatePositionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(PositionStatus)
  status: PositionStatus;
}
