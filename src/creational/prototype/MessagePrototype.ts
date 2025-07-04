import { DeepPartial } from "typeorm";
import { IMessage } from "./Message";

export class MessagePrototype {
    
    constructor(private readonly prototype: IMessage) {
    }

    clone(overrides: DeepPartial<IMessage>): IMessage {

        return{
            ...JSON.parse(JSON.stringify(this.prototype)), // Se hace una copia profunda del prototipo
            ...overrides, // Se aplican los overrides
            metadata: { // Se asegura que metadata siempre tenga un formato correcto
                ...this.prototype.metadata, // Se mantiene la metadata del prototipo
                ...overrides.metadata, // Se aplican los overrides de metadata
                timestamp: new Date().toISOString(), // Se actualiza el timestamp al momento de clonar
            }
        };
    }
}