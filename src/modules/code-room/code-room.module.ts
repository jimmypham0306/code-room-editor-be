import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CodeRoom, CodeRoomSchema } from './entities';
import { CodeRoomService } from './services/code-room.service';
import { CodeRoomController } from './controllers';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CodeRoom.name, schema: CodeRoomSchema },
    ]),
  ],
  controllers: [CodeRoomController],
  providers: [CodeRoomService],
  exports: [],
})
export class CodeRoomModule {}
