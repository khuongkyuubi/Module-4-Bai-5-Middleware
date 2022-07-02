import {
    Entity, Column, PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public readonly id: number;
    @Column({type: "varchar"})
    public userName: string;
    @Column({type: "varchar"})
    public password: string;
}