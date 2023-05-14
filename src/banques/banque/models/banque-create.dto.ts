import { IsNotEmpty } from "class-validator";

export class BanqueCreateDto {
    @IsNotEmpty()
    name: string;  

    @IsNotEmpty()
    budget_id: string;

    @IsNotEmpty()
    ligne_budgetaire: string;

    @IsNotEmpty()
    banque: number;

    @IsNotEmpty()
    caisse: number;

    @IsNotEmpty()
    fin_exterieur: number; 

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;
}