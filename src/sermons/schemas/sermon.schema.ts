import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';



export type SermonDocument = Sermon & Document;

@Schema({timestamps: true})
export class Sermon {

    @Prop({required: true})
    title:String;

    @Prop({required: true})
    description:String;

    @Prop({required: true})
    coverImage:String;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: User.name})
    createBy:User;
    
    @Prop({required: true})
    media:String;

}

export const SermonSchema = SchemaFactory.createForClass(Sermon);