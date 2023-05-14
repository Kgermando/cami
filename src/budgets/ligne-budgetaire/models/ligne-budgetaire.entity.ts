import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LigneBudgetaire {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    budget_id: number;

    @Column()
    echeance_budget: Date;

    @Column()
    ligne_budgetaire: string;

    @Column()
    banque: number;

    @Column()
    banque_depense: number;

    @Column()
    caisse: number;

    @Column()
    caisse_depense: number;

    @Column()
    fin_exterieur: number; 

    @Column()
    fin_exterieur_depense: number; 

    @Column()
    signature: string; // Celui qui fait le document

    @Column()
    created: Date;
    
    @Column()
    update_created: Date;
}