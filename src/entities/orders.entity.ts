import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GroceryItemsEntity } from "./grocery-items.entity";
import { UsersEntity } from "./users.entity";
import { OrderStatusEnum } from "src/common/constants/constant";

@Entity({
    name: 'orders'
})
export class OrdersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar", unique: true })
    order_number: string

    @Column({ type: 'enum', enum: OrderStatusEnum })
    order_status: OrderStatusEnum

    @Column({ type: "float" })
    total_amount: number

    @Column({ type: 'uuid' })
    user_id: string

    @ManyToOne(() => UsersEntity)
    @JoinColumn({
        name: "user_id"
    })
    user: UsersEntity

    @CreateDateColumn({ type: "timestamptz" })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date
}