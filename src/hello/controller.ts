import { Controller, Get } from "@nestjs/common";
import { HelloService } from "./service";

@Controller()
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get("/hello")
  index(): string {
    return this.service.getHello();
  }
}
