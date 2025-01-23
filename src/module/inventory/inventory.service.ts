import { Injectable } from "@nestjs/common";
import { QueryRunner } from "typeorm";

@Injectable()
export class InventoryService {
    constructor(

    ) { }


    async getInventory() {

    }

    // validate the grocery item stock and get details
    async getInventoryDetails() {

    }

    // create new inventory stock
    async addInventoryStock() {

    }

    // update inventory stocks 
    async updateStocks() {

    }

    // get inventory stocks logs
    async inventoryLogs() {

    }

    // hold stock on the reserved once we generate the order
    async reserveReservedStock(queryRunner?: QueryRunner) {
        
    }

    // release the reserved stock if payment fails
    async releaseReservedStock(queryRunner?: QueryRunner) {

    }

    // deduct the reserved stock if payment success
    async deductReleaseStock(queryRunner?: QueryRunner) {

    }
}