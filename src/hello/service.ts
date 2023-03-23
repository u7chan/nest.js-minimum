import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloService {
  getHello(): string {
    return JSON.stringify({ message: "Hello World!" });
  }
}
