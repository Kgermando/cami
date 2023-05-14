import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    echeance: Date; // Date de fin d'execution du budget

    @Column()
    note: string; // Explications

    @Column()
    signature: string; // Celui qui fait le document

    @Column()
    created: Date;

    @Column()
    update_created : Date;

}