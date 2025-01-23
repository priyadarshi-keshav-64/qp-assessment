import { RoleTypeEnum } from "src/common/constants/constant";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: 'users'
})
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar" })
    name: string

    @Column({ type: "varchar", unique: true })
    email: string

    @Column({ type: "varchar" })
    password: string

    @Column({ type: 'enum', enum: RoleTypeEnum })
    role: RoleTypeEnum

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp' })
    deleted_at: Date;
}