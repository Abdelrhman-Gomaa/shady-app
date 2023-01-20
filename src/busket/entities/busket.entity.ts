import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Busket extends Model {
     
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    // user or student id
    @Column(DataType.INTEGER)
    user_Id: number;

    // Courses Relation by CourseID Many to Many
    @Column(DataType.ARRAY(DataType.STRING))
    item: string[];

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
