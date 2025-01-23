import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

class AddGroceryType {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsNumber()
    price_per_unit: number

    @IsBoolean()
    @IsOptional()
    published: boolean

    @IsNumber()
    available_stocks: number
}

export class AddGroceryDto {
    @IsArray({ each: true })
    items: AddGroceryType[]
}