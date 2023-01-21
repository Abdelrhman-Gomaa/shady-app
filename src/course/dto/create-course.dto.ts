import { IsNumber, IsString } from "class-validator";

export class CreateCourseDto {

    @IsString()
    name: string;

    @IsString()
    creator: string;
    
    @IsString()
    description: string;

    @IsString()
    mediaUrl: string;

    @IsString()
    resources: string;

    @IsNumber()
    price: number;

    subject_Id?: number;

    @IsString({each: true})
    subject:string;
}
