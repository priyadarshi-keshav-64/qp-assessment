import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrdersEntity } from "./orders.entity";
import { GroceryItemsEntity } from "./grocery-items.entity";

@Entity({
    name: 'order_items'
})
export class OrderItemsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'uuid' })
    order_id: string

    @ManyToOne(() => OrdersEntity)
    @JoinColumn({
        name: "order_id"
    })
    order: OrdersEntity

    @Column({ type: "uuid" })
    grocery_item_id: string

    @ManyToMany(() => GroceryItemsEntity)
    @JoinColumn({
        name: "grocery_item_id"
    })
    grocery_item: GroceryItemsEntity

    @Column({ type: 'int' })
    order_quantity: number

    @Column({ type: 'decimal' })
    price_per_unit: number

    @Column({ type: 'decimal' })
    subtotal: number

    @CreateDateColumn({ type: "timestamptz" })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date
}