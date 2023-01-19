import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Course extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    creator: string;

    @Column(DataType.STRING)
    description: string;

    @Column(DataType.STRING)
    mediaUrl: string;

    @Column(DataType.STRING)
    resources: string;

    @Column(DataType.INTEGER)
    price: number;

}
