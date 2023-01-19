import { IsString } from "class-validator";

export class CreateCourseDto {

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    mediaUrl: string;

    @IsString()
    resources: string;

    @IsString()
    price: number;
}
