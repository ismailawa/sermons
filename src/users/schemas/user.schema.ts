import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User {

    @Prop({required: true})
    firstName:String;

    @Prop({required: true})
    lastName:String;

    @Prop({required: true})
    userName:String;

    @Prop({required: true})
    email:String;

    @Prop({required: true})
    password:String;

    @Prop({default:"profile.png"})
    profilePicture:String;

}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save',function(next){
    var user = this;
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function(error, salt){
            if (error) {
                return next(error);
            }

            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) {
                    return next(err);
                }

                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});
