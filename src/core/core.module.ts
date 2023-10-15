import { Module } from "@nestjs/common";

import { PrismaService } from "./services/database/prisma.service";

@Module({
  exports: [PrismaService],
  providers: [PrismaService]
})

export class CoreModule { }