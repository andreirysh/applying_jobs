import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateApplicationDto {
  @IsInt()
  positionId: number;

  @IsInt()
  candidateId: number;

  @IsString()
  @IsNotEmpty()
  cv: string;
}
