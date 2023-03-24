import { Module } from '@nestjs/common'
import { HelloController, HelloService } from './hello'
import { AsyncController, AsyncService } from './async'

@Module({
  imports: [],
  controllers: [HelloController, AsyncController],
  providers: [HelloService, AsyncService],
})
export class AppModule {}
