import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { OrderService } from "../orders/order.service";

@Injectable()
export class PaymentService {
    constructor(
        private readonly orderService: OrderService,
        private readonly dataSource: DataSource
    ) { }

    // once payment webhook receives then we update the order and inventory accordingly
    async handlePaymentWebhook(payment: any) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            if (payment.status == "SUCCESS") {
                await this.orderService.confirmOrder(queryRunner)
            }
            if (payment.status == "FAILED") {
                await this.orderService.cancelOrder(queryRunner)
            }

            await queryRunner.commitTransaction()
        } catch (error) {
            await queryRunner.rollbackTransaction()
            throw error
        }
        finally {
            await queryRunner.release()
        }
    }
}