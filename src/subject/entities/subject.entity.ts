import { AutoIncrement, Column, DataType, Model, PrimaryKey } from "sequelize-typescript";

export class Subject extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    name: string
}
