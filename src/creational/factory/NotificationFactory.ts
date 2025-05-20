import {
  Notification,
  EmailNotification,
  SMSNotification,
} from "./Notification";

export enum notificationType {
    EMAIL = "EMAIL",
    SMS = "SMS",
}

export class NotificationFactory {
    static create(type: notificationType): Notification{
        switch (type){
            case notificationType.EMAIL:
                return new EmailNotification();
            case notificationType.SMS:
                return new SMSNotification();
            default:
                throw new Error('Invalid notification type');
        }
    }
}