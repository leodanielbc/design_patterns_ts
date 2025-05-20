import { NotificationFactory, notificationType } from './NotificationFactory';

const recipient = 'client1@gmail.com';
const message = 'Tu pedido ha sido enviado';

console.log('Factory Method');

const emailNotification = NotificationFactory.create(notificationType.EMAIL);
emailNotification.send(recipient, message);

const smsNotification = NotificationFactory.create(notificationType.SMS);
smsNotification.send(recipient, message);