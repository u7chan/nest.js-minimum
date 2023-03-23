import { Module } from "@nestjs/common";
import { HelloController } from "./hello";
import { HelloService } from "./hello";

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [HelloService],
})
export class AppModule {}
