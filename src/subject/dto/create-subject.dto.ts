import { IsString } from "class-validator";

export class CreateSubjectDto {
    @IsString()
    readonly name: string
}
