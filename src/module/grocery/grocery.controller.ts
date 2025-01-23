import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import { GroceryService } from "./grocery.service";
import { AdminGuard } from "src/common/guards/admin.guard";
import { AddGroceryDto } from "./dto/add-grocery.dto";
import { AuthGuard } from "src/common/guards/auth.guard";
import { GetGroceryListDto } from "./dto/get-grocery.dto";
import { UpdateGroceryDto } from "./dto/update-grocery.dto";
import { GroceryItemsEntity } from "src/entities/grocery-items.entity";

@Controller('grocery')
export class GroceryController {
    constructor(
        private readonly service: GroceryService
    ) { }

    @Post('add')
    @UseGuards(AdminGuard)
    async addNewGroceryItems(
        @Req() req: any,
        @Body() payload: AddGroceryDto
    ): Promise<string> {
        return this.service.addNewGroceryItems(req?.user?.id, payload)
    }

    @Get('list')
    @UseGuards(AuthGuard)
    async getGroceryItems(
        @Query() { limit, page }: GetGroceryListDto
    ) {
        return this.service.getGroceryItems(page, limit)
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getGroceryItemDetails(
        @Param('id') id: string
    ) {

    }

    @Delete('remove/:id')
    @UseGuards(AdminGuard)
    async removeGroceryItem(
        @Param('id') id: string
    ): Promise<string> {
        return await this.service.removeGroceryItem(id)
    }

    @Put('update/:id')
    @UseGuards(AdminGuard)
    async updateGroceryItem(
        @Param('id') id: string,
        @Body() payload: UpdateGroceryDto
    ): Promise<GroceryItemsEntity> {
        return await this.service.updateGroceryItem(id, payload)
    }
}