import {
  Controller,
  Get,
  HttpStatus,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async saveFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    return 'success';
  }
}
