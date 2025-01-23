import { Controller, Get, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { InventoryService } from "./inventory.service";
import { AdminGuard } from "src/common/guards/admin.guard";

@Controller('inventory')
export class InventoryController {
    constructor(
        private readonly service: InventoryService
    ) { }

    // get grocery items inventory list
    @Get()
    @UseGuards(AdminGuard)
    async getInventory() {

    }

    // validate the grocery item stock and get details
    @Get('/:groceryId')
    @UseGuards(AdminGuard)
    async getInventoryDetails(
        @Param('groceryId') id: string
    ) {

    }

    // add new stocks 
    @Post('/:groceryId/add-stock')
    @UseGuards(AdminGuard)
    async addInventoryStock(
        @Param('groceryId') id: string
    ) {

    }

    // update inventory stocks 
    @Patch('/:groceryId')
    @UseGuards(AdminGuard)
    async updateStocks(
        @Param('groceryId') id: string
    ) {

    }

    // get inventory stocks logs
    @Get('/:groceryId/logs')
    @UseGuards(AdminGuard)
    async inventoryLogs(
        @Param('groceryId') id: string
    ) {

    }

}