import {getModelForClass, prop, Ref} from "@typegoose/typegoose";
import {Producer} from "./producer";
import {Category} from "./category";

/*
 WZORZEZ ADAPTER
 Klasa która jest adaptowana do interfejsu ILineItem
*/
export class Product {
    // @ts-ignore
    _id: string;

    @prop({required: true})
        // @ts-ignore
    desc: string;

    @prop({required: true})
        // @ts-ignore
    name: string;

    @prop({required: true})
        // @ts-ignore
    price: number;

    @prop({required: true})
        // @ts-ignore
    image: string;

    @prop({ref: Producer, required: true})
        // @ts-ignore
    producent: Ref<Producer>;

    @prop({ref: Category, required: true})
        // @ts-ignore
    category: Ref<Producer>;

    @prop({ required: true })
    // @ts-ignore
    image: string;

}

export const ProductModel = getModelForClass(Product);



