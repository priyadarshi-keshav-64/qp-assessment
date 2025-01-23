import { Injectable } from "@nestjs/common";
import { DataSource, QueryRunner } from "typeorm";
import { InventoryService } from "../inventory/inventory.service";

@Injectable()
export class OrderService {
    constructor(
        private readonly dataSource: DataSource,
        private readonly inventoryService: InventoryService
    ) { };

    async getOrders() {

    }

    async getOrderDetails() {
    }


    // payload will have all the g-items with quantity
    async generateOrder() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            // generate order and their items within transaction
            // use inventory service to reserve the stock 
            await this.inventoryService.reserveReservedStock(queryRunner)
            await queryRunner.commitTransaction()
        } catch (error) {
            await queryRunner.rollbackTransaction()
            throw error
        }
        finally {
            await queryRunner.release()
        }
    }

    async confirmOrder(queryRunner?: QueryRunner) {
        await this.inventoryService.deductReleaseStock(queryRunner)
    }

    async cancelOrder(queryRunner?: QueryRunner) {
        await this.inventoryService.releaseReservedStock(queryRunner)
    }
}