import { ApiProperty } from "@nestjs/swagger";


export class createUserDto {

    @ApiProperty({name: "firstName", description: "Users first name"})
    firstName: string;

    @ApiProperty({name: "lastName", description: "Users last name"})
    lastName: string;

    @ApiProperty({name: "userName", description: "Users username"})
    userName: string;

    @ApiProperty({name: "email", description: "Users email"})
    email: string;

    @ApiProperty({name: "password", description: "Users password"})
    password: string;

    @ApiProperty({name: "profilePicture", description: "Users profile image"})
    profilePicture: string;

}