import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Subject extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    name: string
}
