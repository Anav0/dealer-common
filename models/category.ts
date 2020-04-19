import {getModelForClass, prop, arrayProp, Ref} from "@typegoose/typegoose";
import {Producer} from "./producer";

export class Category {
    // @ts-ignore
    _id: string;

    @prop({ required: true })
    // @ts-ignore
    name: string;

    @arrayProp({ref: Producer, required: true })
    // @ts-ignore
    producers: Ref<Producer>[];
}

export const CategoryModel = getModelForClass(Category);