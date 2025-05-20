export interface Notification {
    send(recipient: string, message: string):void;
}

export class EmailNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`📧 Sending email to ${recipient}: ${message}`);
    }
}

export class SMSNotification implements Notification {
    send(recipient: string, message: string): void {
        console.log(`📱 Sending SMS to ${recipient}: ${message}`);
    }
}