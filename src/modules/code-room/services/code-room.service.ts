import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { CodeRoom } from '../entities';
import { CodeRoomModel } from '../models';

@Injectable()
export class CodeRoomService {
  constructor(
    @InjectModel(CodeRoom.name) private codeRoomModel: Model<CodeRoom>,
  ) {}

  async create(payloadRoom: Omit<CodeRoomModel, 'room_id'>): Promise<CodeRoom> {
    const { room_name } = payloadRoom;
    const roomId = randomUUID();
    const data = {
      room_id: roomId,
      room_name,
    };
    const newCodeRoom = new this.codeRoomModel(data);
    return newCodeRoom.save();
  }
}
