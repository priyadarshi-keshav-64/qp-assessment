import { Controller, Get, Inject, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/common/guards/auth.guard";

@Controller('user')
export class UsersController {
    constructor(
        private readonly service: UsersService
    ) { }

}