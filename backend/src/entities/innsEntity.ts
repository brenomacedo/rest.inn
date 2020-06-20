import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Inns {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @Column({
        type: 'string',
        unique: true
    })
    name!: string

    @Column()
    description!: string

    @Column({
        type: 'float'
    })
    lat!: number

    @Column({
        type: 'float'
    })
    lng!: number

    @Column()
    image!: string
}