import {getModelForClass, prop} from "@typegoose/typegoose";

export class Producer {
    // @ts-ignore
    _id: string

    @prop({ required: true })
    // @ts-ignore
    desc: string;

    @prop({ required: true })
    // @ts-ignore
    name: string;

}
export const ProducerModel = getModelForClass(Producer);



