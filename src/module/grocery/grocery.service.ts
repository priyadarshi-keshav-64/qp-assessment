import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GroceryItemsEntity } from "src/entities/grocery-items.entity";
import { AddGroceryDto } from "./dto/add-grocery.dto";
import { Repository } from "typeorm";
import { InventoryEntity } from "src/entities/inventory.entity";
import { v4 as uuidv4 } from 'uuid';
import { UpdateGroceryDto } from "./dto/update-grocery.dto";

@Injectable()
export class GroceryService {
    @InjectRepository(GroceryItemsEntity)
    private readonly groceryRepo: Repository<GroceryItemsEntity>
    @InjectRepository(InventoryEntity)
    private readonly inventoryRepo: Repository<InventoryEntity>

    // add new grocery item
    async addNewGroceryItems(userId: string, payload: AddGroceryDto): Promise<string> {
        try {
            // TODO: db operations to create grocery items
            return "Grocery items added successfully.";
        } catch (error) {
            throw error
        }
    }

    // get items
    async getGroceryItems(page: number, limit: number) {
        try {
            // TODO: there can be more filters to sort by price, range etc
        } catch (error) {
            throw error
        }
    }

    // remove or unpublished the item
    async removeGroceryItem(groceryItemId: string): Promise<string> {
        try {
            // TODO: db operations to remove grocery items
            return "Item removed successfully."
        } catch (error) {
            throw error
        }
    }

    // update item
    async updateGroceryItem(groceryItemId: string, { description, price_per_unit, title }: UpdateGroceryDto): Promise<GroceryItemsEntity> {
        try {
            const item = await this.groceryRepo.findOneBy({ id: groceryItemId });
            // TODO: update item 
            return await this.groceryRepo.save(item)
        } catch (error) {
            throw error
        }
    }
}