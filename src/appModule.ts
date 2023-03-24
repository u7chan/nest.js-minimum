import { Module } from '@nestjs/common';
import { AsyncController, AsyncService } from './async';
import { HelloController } from './hello';
import { HelloService } from './hello';

@Module({
  imports: [],
  controllers: [HelloController, AsyncController],
  providers: [HelloService, AsyncService],
})
export class AppModule {}
