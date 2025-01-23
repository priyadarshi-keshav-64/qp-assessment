import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "src/entities/users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UsersEntity
        ])
    ],
    controllers: [UsersController],
    providers: [UsersService, JwtService],
})
export class UsersModule { }