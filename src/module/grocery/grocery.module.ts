import { Module } from "@nestjs/common";
import { GroceryController } from "./grocery.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroceryItemsEntity } from "src/entities/grocery-items.entity";
import { GroceryService } from "./grocery.service";
import { InventoryEntity } from "src/entities/inventory.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            GroceryItemsEntity,
            InventoryEntity
        ])
    ],
    providers: [GroceryService],
    controllers: [GroceryController]
})
export class GroceryModule { }