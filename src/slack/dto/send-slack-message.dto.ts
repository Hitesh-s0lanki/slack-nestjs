import { IsNotEmpty, IsString } from "class-validator";

export class SendSlackMessageDto {
    @IsString()
    @IsNotEmpty()
    channel: string;

    @IsString()
    @IsNotEmpty()
    text: string;
}