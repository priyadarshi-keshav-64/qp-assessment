import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginDto } from "../users/dto/login.dto";
import { LoginResponseDto } from "../users/dto/login-response.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post("sign-up")
    async signUp(
        @Body() payload: CreateUserDto
    ): Promise<CreateUserDto> {
        return await this.authService.signUp(payload)
    }

    @Post("sign-in")
    async signIn(
        @Body() payload: LoginDto
    ): Promise<LoginResponseDto> {
        return await this.authService.signIn(payload);
    }
}