import { IsEmail, IsNotEmpty } from "class-validator";

export class FinExterieurCreateDto {
    @IsNotEmpty()
    name: string; 

    @IsNotEmpty()
    signature: string;  

    @IsNotEmpty()
    created: Date;

    @IsNotEmpty()
    update_created : Date;
}