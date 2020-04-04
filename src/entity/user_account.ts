import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Tree, UpdateDateColumn } from "typeorm";

@Entity()
export class UserAccount {
    constructor(data?: Partial<UserAccount>) {
        Object.assign(this, data)
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}