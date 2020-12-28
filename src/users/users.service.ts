import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {

    private readonly logger = new Logger(UsersService.name);
    
    constructor(@InjectModel(User.name) private Usermodel: Model<UserDocument>){}

    async createUser(user:createUserDto){
        const newUser =  new this.Usermodel({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userName: user.userName,
            password: user.password,
            profilePicture: user.profilePicture
        });

        return await newUser.save();
    }

    async getUsers(){
        return this.Usermodel.find();
    }


    async findUser(email: string): Promise<User | undefined>{

        return this.Usermodel.findOne({email: email});
    }
}
