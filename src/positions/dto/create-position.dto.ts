import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsIn(['open', 'closed'])
  status: string;
}
