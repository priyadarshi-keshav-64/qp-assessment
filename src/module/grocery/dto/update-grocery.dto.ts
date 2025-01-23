import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateGroceryDto {
    @IsString()
    @IsOptional()
    title: string
    
    @IsString()
    @IsOptional()
    description: string
    
    @IsNumber()
    @IsOptional()
    price_per_unit: number
}