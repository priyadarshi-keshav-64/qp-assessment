import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GroceryItemsEntity } from "./grocery-items.entity";

@Entity({
    name: 'inventory'
})
export class InventoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'uuid' })
    grocery_item_id: string

    @OneToOne(() => GroceryItemsEntity, { cascade: true })
    @JoinColumn({
        name: "grocery_item_id"
    })
    grocery_item: GroceryItemsEntity

    @Column({ type: 'int', default: 0 })
    available_stock: number

    @Column({ type: 'int', default: 0 })
    sold_stock: number

    @Column({ type: 'int', default: 0 })
    reserved_stock: number

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date

    @DeleteDateColumn({ type: 'timestamptz' })
    deleted_at: Date
}