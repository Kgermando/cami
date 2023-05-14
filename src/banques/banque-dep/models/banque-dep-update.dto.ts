export class BanqueDepUpdateDto {
    banque_id?: number;

    ligne_budgetaire?: string;

    type_operation?: string;

    libele?: string;

    montant_entree?: number;

    montant_sortant?: number;

    number_transaction?: number;

    signature?: string;

    created?: Date;

    update_created?: Date; 
}