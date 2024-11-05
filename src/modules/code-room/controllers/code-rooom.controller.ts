import { Body, Controller, Get, Post } from '@nestjs/common';
import { CodeRoomModel } from '../models';
import { CodeRoomService } from '../services/code-room.service';

@Controller('room')
export class CodeRoomController {
  constructor(private readonly codeRoomService: CodeRoomService) {}

  @Get()
  async getRoom() {}

  @Post()
  async createCodeRoom(
    @Body() payloadCodeRoom: Omit<CodeRoomModel, 'room_id'>,
  ): Promise<CodeRoomModel> {
    console.log(payloadCodeRoom);
    return await this.codeRoomService.create(payloadCodeRoom);
  }
}
