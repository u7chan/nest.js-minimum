import { Injectable } from '@nestjs/common';

@Injectable()
export class AsyncService {
  async getText(): Promise<string> {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1_000)); // delay
    return 'Async Text!!';
  }
}
