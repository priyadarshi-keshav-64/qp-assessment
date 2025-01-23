import { IsNumberString } from "class-validator";

export class GetGroceryListDto {
    @IsNumberString()
    page: number

    @IsNumberString()
    limit: number
}