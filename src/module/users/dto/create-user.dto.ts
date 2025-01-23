import { IsEmail, IsEnum, IsString } from "class-validator";
import { RoleTypeEnum } from "src/common/constants/constant";

export class CreateUserDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsEmail()
    password: string

    @IsEnum(RoleTypeEnum)
    role: RoleTypeEnum

    
}