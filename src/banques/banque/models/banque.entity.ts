import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Banque {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;  // Nom du partenaire FMI

    @Column()
    signature: string; // Celui qui fait le document

    @Column()
    created: Date;
    
    @Column()
    update_created: Date;
}