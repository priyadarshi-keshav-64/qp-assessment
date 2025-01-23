import { IsString } from "class-validator";

export class LoginResponseDto {
    @IsString()
    email: string

    @IsString()
    token: string
}