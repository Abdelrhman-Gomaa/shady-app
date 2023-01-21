import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Course } from "src/course/entities/course.entity";

@Table
export class Subject extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number

    @Column(DataType.STRING)
    name: string

    @HasMany(() => Course,{})
    courses: Course[]
}
