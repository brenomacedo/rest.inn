import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: "inns" })
export default class Inns {
    @PrimaryGeneratedColumn("increment")
    id!: number

    @Column({
        type: 'varchar',
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