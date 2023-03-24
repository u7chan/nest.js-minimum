import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getText(): string {
    return JSON.stringify({ message: 'Hello World!' });
  }
}
