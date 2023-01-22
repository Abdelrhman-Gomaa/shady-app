import { AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Course } from "src/course/entities/course.entity";

@Table
export class Busket extends Model {
     
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    // user or student id
    @Column(DataType.INTEGER)
    user_Id: number;
    
    @BelongsToMany(() => Course, 'BusketCourses', 'busket_Id', 'course_Id')
    courses: Course[]

    // إجمالى سعر الفاتورة
    @Column(DataType.INTEGER)
    totalPrice: number; 

    // إجمالى عدد العناصر المختارة
    @Column(DataType.INTEGER)
    totalItems: number; 

    // المبلغ المدفوع
    @Column(DataType.INTEGER)
    cash: number; 

    // المتبقى
    @Column(DataType.INTEGER)
    rest: number; 

    // طريقة الدفع
    @Column(DataType.STRING)
    payMethod: string; 
    
}
