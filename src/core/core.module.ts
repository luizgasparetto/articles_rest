import { Module } from "@nestjs/common";

import { PrismaService } from "./infra/services/database/prisma.service";


@Module({
  exports: [PrismaService],
  providers: [PrismaService]
})

export class CoreModule { }