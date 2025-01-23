import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { OrderService } from "../orders/order.service";
import { InventoryService } from "../inventory/inventory.service";

@Module({
    imports: [],
    providers: [PaymentService, OrderService, InventoryService],
    controllers: [PaymentController]
})
export class PaymentModule { }