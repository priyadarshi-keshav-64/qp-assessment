import { Controller, Get, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/common/guards/auth.guard";

@Controller('order')
export class OrderController {
    constructor(

    ) { };

    @Get()
    @UseGuards(AuthGuard)
    async getOrders() {

    }

    @Post(':id')
    @UseGuards(AuthGuard)
    async getOrderDetails() {
        // return the order and their order items
    }
    
    @Post('generate')
    @UseGuards(AuthGuard)
    async generateOrder() {

    }
}