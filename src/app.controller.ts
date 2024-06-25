import { Controller, Get, HttpCode, Redirect, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/kittens')
  // @Redirect('/')
  // @HttpCode(204)
  getKittens(@Req() req: Request): string {
    return 'mitzi kitzi and pizi' + req.query.id;
  }
}
