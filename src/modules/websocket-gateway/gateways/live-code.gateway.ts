import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(9999, { namespace: '/livecode', transports: ['websocket'] })
export class LiveCodeSocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
    client.emit('connection', {
      message: 'Welcome to the livecode namespace!',
    });
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    client.join(data.roomId);
    client.emit('joinedRoom', { room: data.roomId });
  }

  @SubscribeMessage('updateCode')
  handleUpdateCode(
    @MessageBody() data: { roomId: string; codeContent: string },
  ) {
    console.log('111111111111111');
    return this.server.to(data.roomId).emit('updateCode', data.codeContent);
  }
}
