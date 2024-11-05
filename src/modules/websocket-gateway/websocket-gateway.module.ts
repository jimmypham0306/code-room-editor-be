import { Module } from '@nestjs/common';
import { LiveCodeSocketGateway } from './gateways/live-code.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [LiveCodeSocketGateway],
  exports: [],
})
export class WebsocketGateWayModule {}
