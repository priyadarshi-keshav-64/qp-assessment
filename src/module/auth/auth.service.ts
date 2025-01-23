import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/module/users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginDto } from "../users/dto/login.dto";
import { LoginResponseDto } from "../users/dto/login-response.dto";
import { ErrorMessage } from "src/common/constants/error.message";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  public generateToken(payload: object, expiry: number | string): string {
    return this.jwtService.sign(payload, { expiresIn: expiry, secret: process.env.JWT_SECRET });
  }

  async signUp(payload: CreateUserDto): Promise<CreateUserDto> {
    try {
      return await this.usersService.createUser(payload)
    } catch (error) {
      throw error
    }
  }

  async signIn({ email, password }: LoginDto): Promise<LoginResponseDto> {
    try {
      console.log(email)
      const user = await this.usersService.findUserByEmail(email);
      
      // TODO: check password with using bcrypt
      if (!user || (password !== user.password)) {
        throw ErrorMessage.user.INORRECT_CRED
      };

      const token = await this.generateToken({ id: user.id, name: user.name, email: user.email }, '1d')

      return {
        email,
        token
      }

    } catch (error) {
      throw error
    }
  }

}