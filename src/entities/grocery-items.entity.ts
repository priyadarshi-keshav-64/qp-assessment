import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity({
    name: 'grocery_items'
})
export class GroceryItemsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'varchar' })
    title: string

    @Column({ type: 'varchar' })
    description: string

    @Column({ type: 'decimal' })
    price_per_unit: number

    @Column({ type: 'uuid' })
    published_by_id: string

    @ManyToOne(() => UsersEntity)
    @JoinColumn({ name: "published_by_id", referencedColumnName: "id" })
    published_by: UsersEntity

    @Column({ type: 'boolean', default: false })
    published: boolean

    @Column({ type: 'timestamptz', nullable: true })
    published_at: Date

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date

    @DeleteDateColumn({ type: 'timestamptz' })
    deleted_at: Date
}