import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Subject } from "src/subject/entities/subject.entity";

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

    @ForeignKey(() => Subject)
    subject_Id: number

    @BelongsTo(() => Subject)
    subject: Subject;

}
