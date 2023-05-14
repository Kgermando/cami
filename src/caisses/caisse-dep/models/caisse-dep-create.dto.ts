import { IsEmail, IsNotEmpty } from "class-validator";

export class CaisseDepCreateDto {
    @IsNotEmpty()
    caisse_id: number;

    @IsNotEmpty()
    ligne_budgetaire: string;

    @IsNotEmpty()
    type_operation: string;

    @IsNotEmpty()
    libele: string;

    @IsNotEmpty()
    montant_entree: number;
    
    @IsNotEmpty()
    montant_sortant: number;

    @IsNotEmpty()
    number_transaction: number;

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;
}