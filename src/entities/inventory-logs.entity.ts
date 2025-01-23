import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GroceryItemsEntity } from "./grocery-items.entity";

@Entity({
    name: 'inventory_logs'
})
export class InventoryLogsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'uuid' })
    grocery_item_id: string

    @ManyToOne(() => GroceryItemsEntity)
    @JoinColumn({
        name: "grocery_item_id"
    })
    grocery_item: GroceryItemsEntity

    @Column({ type: 'int' })
    available_stock: number

    @Column({ type: 'int' })
    sold_stock: number

    @Column({ type: 'int' })
    reserved_stock: number

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date
}