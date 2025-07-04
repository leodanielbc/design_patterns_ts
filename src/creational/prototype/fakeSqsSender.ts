import { IMessage } from "./Message";

export function sendToSqs(message: IMessage) {
  console.log("🟢 Simulando envío a SQS:");
  console.log(JSON.stringify(message, null, 2));
}