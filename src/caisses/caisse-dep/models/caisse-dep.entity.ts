import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CaisseDep {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    caisse_id: number;

    @Column()
    ligne_budgetaire: string; // Seulement au cas ou il y a sortie d'argents

    @Column()
    type_operation: string; // Entree ou Sortie

    @Column()
    libele: string; 

    @Column()
    montant_entree: number;

    @Column()
    montant_sortant: number;

    @Column()
    number_transaction: number;

    @Column()
    signature: string; // Celui qui fait le document

    @Column()
    created: Date;
    
    @Column()
    update_created: Date;
}