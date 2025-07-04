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


