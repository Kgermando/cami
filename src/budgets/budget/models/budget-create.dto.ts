import { IsEmail, IsNotEmpty } from "class-validator";

export class BudgetCreateDto {
    @IsNotEmpty()
    name: string;  

    @IsNotEmpty()
    echeance: Date;

    @IsNotEmpty()
    note: string;

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;
}