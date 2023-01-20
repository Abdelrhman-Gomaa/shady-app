import { IsNumber, IsString } from "class-validator";

export class CreateBusketDto {

    // Courses Relation by CourseID Many to Many
    @IsNumber()
    user_Id: number; 

    // Courses Relation by CourseID Many to Many
    @IsString({each: true})
    item: string[];

    // إجمالى سعر الفاتورة
    @IsNumber()
    totalPrice: number; 

    // إجمالى عدد العناصر المختارة
    @IsNumber()
    totalItems: number; 

    // المبلغ المدفوع
    @IsNumber()
    cash: number; 

    // المتبقى
    @IsNumber()
    rest: number; 

    // طريقة الدفع
    @IsString()
    payMethod: string; 
}
