import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersEntity } from "src/entities/orders.entity";
import { InventoryService } from "../inventory/inventory.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            OrdersEntity
        ])
    ],
    controllers: [OrderController],
    providers: [OrderService, InventoryService]
})
export class OrdersModule { }