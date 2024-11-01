import { Controller, Get } from '@nestjs/common';

@Controller('room')
export class CodeRoomController {
  @Get()
  async getRoom() {}
}
