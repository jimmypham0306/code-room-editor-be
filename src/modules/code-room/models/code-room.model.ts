import { IsString } from 'class-validator';
import { CodeRoomInterface } from '../interfaces';

export class CodeRoomModel implements CodeRoomInterface {
  @IsString()
  roomId: string;

  @IsString()
  roomName: string;
}
