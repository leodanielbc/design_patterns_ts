import { sendToSqs } from './fakeSqsSender';
import { IMessage } from './Message';
import { MessagePrototype } from './MessagePrototype';

const baseMessage: IMessage = {
    eventType: 'BASE_EVENT',
    payload: {},
    metadata: {
        source: 'user-service',
        correlationId: 'req-000',
        timestamp: new Date().toISOString()
    }
}
console.log('Prototype Pattern');

const messagePrototype = new MessagePrototype(baseMessage);

// se clona para evento de usuario creado
const userCreated = messagePrototype.clone({
    eventType: 'USER_CREATED',
    payload: { userId: 'user123', name: 'Juan B.' },
    metadata: { correlationId: 'req-123' },
});

sendToSqs(userCreated);

// se clona para evento de actualizacion
const userUpdated = messagePrototype.clone({
    eventType: 'USER_UPDATED',
    payload: { userId: 'user123', name: 'Juan C. B.' },
    metadata: { correlationId: 'req-456' },
})

sendToSqs(userUpdated);


//Ejemplo de clonación con structuredClone
// Esto es útil si queremos clonar un objeto que ya tiene una estructura compleja
// y no queremos perder la referencia a los objetos anidados.

const clonedUser = structuredClone(userCreated);
clonedUser.eventType = 'USER_CLONED';

console.log('cloned', clonedUser);
console.log('original: ', userCreated);





