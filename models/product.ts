import {getModelForClass, Ref, prop} from "@typegoose/typegoose";
import {Producer} from "./producer";
import {Category} from "./category";

export class Product {
    // @ts-ignore
    _id: string;

    @prop({ required: true })
    // @ts-ignore
    desc: string;

    @prop({ required: true })
    // @ts-ignore
    name: string;

    @prop({ required: true })
    // @ts-ignore
    price: number;

    @prop({ ref: Producer, required: true })
    // @ts-ignore
    producent: Ref<Producer>;

    @prop({ ref: Category, required: true })
    // @ts-ignore
    category: Ref<Producer>;

}
export const ProductModel = getModelForClass(Product);



