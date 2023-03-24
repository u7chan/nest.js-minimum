import { Controller, Get } from '@nestjs/common'
import { HelloService } from './service'

@Controller('/hello')
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  index(): string {
    return this.service.getText()
  }
}
