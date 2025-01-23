import { Injectable } from "@nestjs/common";
import { ErrorMessage } from "src/common/constants/error.message";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "src/entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private userRepo: Repository<UsersEntity>
    ) { };

    async findUserByEmail(email: string): Promise<UsersEntity> {
        try {
            return await this.userRepo.findOne({
                where: { email },
                select: ["email", "id", "name", "password"]
            });
        } catch (error) {
            throw error
        }
    }

    async createUser({ email, name, role, password }: CreateUserDto): Promise<UsersEntity> {
        try {
            /* 
                TODO: check password validation
            */
            const user = await this.findUserByEmail(email);
            if (!user) throw ErrorMessage.user.NOT_FOUND;
            
            const newUser = this.userRepo.create({
                name,
                email,
                password,
                role
            })

            return await this.userRepo.save(newUser);
        } catch (error) {
            throw error
        }
    }
}