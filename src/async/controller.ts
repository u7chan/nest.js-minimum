import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { AsyncService } from './service';

@Controller('/async')
export class AsyncController {
  constructor(private readonly service: AsyncService) {}

  @Get()
  async index(): Promise<string> {
    return await this.service.getText();
  }

  @Post()
  async post(@Res() res: Response) {
    const message = await this.service.getText();
    res.status(HttpStatus.OK).json({ message });
  }
}
