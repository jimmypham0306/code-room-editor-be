// src/coderoom/schemas/coderoom.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CodeRoom extends Document {
  @Prop({ required: true, unique: true })
  room_id: string;

  @Prop({ required: true, minlength: 3, maxlength: 50 })
  room_name: string;
}

export const CodeRoomSchema = SchemaFactory.createForClass(CodeRoom);
