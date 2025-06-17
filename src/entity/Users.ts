import { Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";    
@Entity({ name: "users" })
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number | null

    @Column("text", { nullable: false })
    firstname!: string

    @Column("text", { nullable: false })
    lastname!: string

    @Column("text", { nullable: false })
    employed!: string

    @Column("text", { nullable: false })
    date!: string

    @Column("boolean", { nullable: false })
    active!: boolean

    @Column("timestamp", { nullable: false })
    createdAt!: Date

    @Column("timestamp", { nullable: false })
    updatedAt!: Date

  }

