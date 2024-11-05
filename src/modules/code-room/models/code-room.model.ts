import { IsString } from 'class-validator';
import { CodeRoomInterface } from '../interfaces';

export class CodeRoomModel implements CodeRoomInterface {
  @IsString()
  room_id: string;

  @IsString()
  room_name: string;
}
